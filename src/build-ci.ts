#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Build CI [${process.cwd()}]`)
execSync('yarn deps', { stdio: 'inherit' })
execSync('yarn lint', { stdio: 'inherit' })
execSync('yarn dlx react-scripts build', { stdio: 'inherit' })
execSync('yarn sitemap', { stdio: 'inherit' })
