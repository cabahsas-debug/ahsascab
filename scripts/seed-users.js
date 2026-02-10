const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

// Helper to load env manually
const loadEnv = (filePath) => {
    try {
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath);
            let text;
            if (content[0] === 0xFF && content[1] === 0xFE) {
                text = content.toString('utf16le');
            } else if (content.indexOf('\0') !== -1) {
                text = content.toString('utf16le');
            } else {
                text = content.toString('utf8');
            }

            text.split(/\r?\n/).forEach(line => {
                const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
                if (match) {
                    const key = match[1].trim();
                    const value = match[2] ? match[2].trim().replace(/^["']|["']$/g, '') : '';
                    if (!process.env[key]) {
                        process.env[key] = value;
                    }
                }
            });
        }
    } catch (e) {
        console.error(`Error loading ${filePath}:`, e);
    }
};

const envLocalPath = path.resolve(__dirname, '../.env.local');
loadEnv(envLocalPath);

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is missing from .env.local');
    process.exit(1);
}

// Minimal Schema to match src/models/index.ts key fields
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    role: { type: String, enum: ['user', 'admin', 'manager', 'operational_manager'], default: 'user' },
    password: { type: String },
    permissions: { type: [String], default: [] },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

(async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected.');

        // 1. Admin User
        const adminEmail = 'admin@ahsascab.com';
        const adminPassword = await bcrypt.hash('admin123', 10);

        await User.findOneAndUpdate(
            { email: adminEmail },
            {
                email: adminEmail,
                name: 'System Admin',
                role: 'admin',
                password: adminPassword,
                permissions: ['ADMIN', 'ALL']
            },
            { upsert: true, new: true }
        );
        console.log(`✅ Seeded ${adminEmail}`);

        // 2. Manager User
        const managerEmail = 'manager@ahsascab.com';
        const managerPassword = await bcrypt.hash('manager123', 10);

        await User.findOneAndUpdate(
            { email: managerEmail },
            {
                email: managerEmail,
                name: 'Operations Manager',
                role: 'manager',
                password: managerPassword,
                permissions: ['BOOKING', 'FLEET']
            },
            { upsert: true, new: true }
        );
        console.log(`✅ Seeded ${managerEmail}`);

        console.log('Seed completed successfully.');
        await mongoose.disconnect();
        process.exit(0);

    } catch (error) {
        console.error('❌ Seed Error:', error);
        process.exit(1);
    }
})();
