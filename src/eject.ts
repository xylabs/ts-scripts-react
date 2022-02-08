#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Eject [${process.cwd()}]`)
execSync('yarn react-scripts eject', { stdio: 'inherit' })
