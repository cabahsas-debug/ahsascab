require('dotenv').config();
const mongoose = require('mongoose');

// Utility to generate a clean slug
function generateSlug(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-')         // Replace & with 'and'
        .replace(/[^a-z0-9 -]/g, '')    // Remove invalid chars
        .replace(/\s+/g, '-')           // Collapse whitespace and replace by -
        .replace(/-+/g, '-');           // Collapse dashes
}

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const db = mongoose.connection.db;
        const postsCollection = db.collection('blogposts');
        
        const posts = await postsCollection.find({}).toArray();
        console.log(`Found ${posts.length} blog posts. Checking for invalid slugs...`);
        
        let updatedCount = 0;
        
        for (const post of posts) {
            const currentSlug = post.slug;
            const validSlug = generateSlug(currentSlug);
            
            // If the current slug is different from the valid one (e.g. contains spaces, uppercase, etc)
            if (currentSlug !== validSlug) {
                console.log(`Fixing slug: "${currentSlug}" => "${validSlug}"`);
                
                // Update the document
                await postsCollection.updateOne(
                    { _id: post._id },
                    { $set: { slug: validSlug } }
                );
                updatedCount++;
            }
        }
        
        console.log(`Finished checking. Updated ${updatedCount} posts.`);
        
    } catch (err) {
        console.error("Error running script:", err);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
}

run();
