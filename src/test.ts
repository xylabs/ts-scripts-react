#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Test [${process.cwd()}]`)
execSync('yarn react-scripts test', { stdio: 'inherit' })
