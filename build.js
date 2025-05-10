// This script is run by Vercel during the build process
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Run the Vite build
console.log('Running Vite build...');
execSync('vite build', { stdio: 'inherit' });

// Create a .vercel/output directory structure if it doesn't exist
const outputDir = path.join('.vercel', 'output');
const staticDir = path.join(outputDir, 'static');
const functionDir = path.join(outputDir, 'functions');
const apiDir = path.join(functionDir, 'api');

// Create directories if they don't exist
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
if (!fs.existsSync(staticDir)) fs.mkdirSync(staticDir, { recursive: true });
if (!fs.existsSync(functionDir)) fs.mkdirSync(functionDir, { recursive: true });
if (!fs.existsSync(apiDir)) fs.mkdirSync(apiDir, { recursive: true });

// Copy the static files from dist/public to .vercel/output/static
console.log('Copying static files...');
execSync('cp -r dist/public/* .vercel/output/static/', { stdio: 'inherit' });

// Setup API function
console.log('Setting up API function...');
execSync('cp -r api/* .vercel/output/functions/api/', { stdio: 'inherit' });

console.log('Build complete!');