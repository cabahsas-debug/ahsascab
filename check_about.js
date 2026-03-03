const { exec } = require('child_process');

exec('npx tsc "src/app/(public)/about/page.tsx" --noEmit', (error, stdout, stderr) => {
    console.log(stdout);
});
