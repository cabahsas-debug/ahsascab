const { exec } = require('child_process');
exec('npx tsc "src/app/(public)/routes/[slug]/page.tsx" --noEmit', (error, stdout, stderr) => {
    console.log(stdout || stderr || 'Clean compile!');
});
