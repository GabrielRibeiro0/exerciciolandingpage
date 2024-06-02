const os = require('os');
const { execSync } = require('child_process');

if (os.platform() === 'win32') {
    execSync('npm install lightningcss-win32-x64-msvc@1.25.1');
} else {
    console.log('Pulando a instalação do lightningcss em plataformas não Windows.');
}
