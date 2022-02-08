#!/usr/bin/env node
import { execSync } from 'child_process'
console.log(`Build [${process.cwd()}]`)
execSync('yarn version --patch --no-git-tag-version', { stdio: 'inherit' })
execSync('yarn build-ci', { stdio: 'inherit' })
