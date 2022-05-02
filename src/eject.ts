#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Eject [${process.cwd()}]`)
execSync('yarn dlx react-scripts eject', { stdio: 'inherit' })
