import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m'
};

// Check if package.json exists
function checkPackageJson() {
    try {
        const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
        console.log(`${colors.green}✓${colors.reset} package.json found`);
        return true;
    } catch (error) {
        console.error(`${colors.red}✗${colors.reset} package.json not found`);
        return false;
    }
}

// Check if node_modules exists
function checkNodeModules() {
    const nodeModulesPath = path.join(__dirname, 'node_modules');
    if (fs.existsSync(nodeModulesPath)) {
        console.log(`${colors.green}✓${colors.reset} node_modules directory found`);
        return true;
    } else {
        console.error(`${colors.red}✗${colors.reset} node_modules directory not found`);
        return false;
    }
}

// Check Node.js version
function checkNodeVersion() {
    const requiredVersion = '14.0.0';
    const currentVersion = process.version;
    const versionCheck = compareVersions(currentVersion.slice(1), requiredVersion);
    
    if (versionCheck >= 0) {
        console.log(`${colors.green}✓${colors.reset} Node.js version ${currentVersion} is compatible`);
        return true;
    } else {
        console.error(`${colors.red}✗${colors.reset} Node.js version ${currentVersion} is too old. Required: ${requiredVersion}+`);
        return false;
    }
}

// Compare version strings
function compareVersions(v1, v2) {
    const v1Parts = v1.split('.').map(Number);
    const v2Parts = v2.split('.').map(Number);
    
    for (let i = 0; i < 3; i++) {
        if (v1Parts[i] > v2Parts[i]) return 1;
        if (v1Parts[i] < v2Parts[i]) return -1;
    }
    return 0;
}

// Main test function
function runTests() {
    console.log('\nRunning dependency checks...\n');
    
    const results = [
        checkPackageJson(),
        checkNodeModules(),
        checkNodeVersion()
    ];
    
    const allPassed = results.every(result => result === true);
    
    console.log('\nSummary:');
    if (allPassed) {
        console.log(`${colors.green}All dependency checks passed!${colors.reset}`);
    } else {
        console.log(`${colors.red}Some dependency checks failed. Please fix the issues above.${colors.reset}`);
    }
    
    return allPassed;
}

// Run the tests
const success = runTests();
process.exit(success ? 0 : 1); 