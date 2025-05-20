#!/usr/bin/env python3

import sys
import importlib
import pkg_resources

def test_imports():
    # Read requirements.txt
    with open('requirements.txt', 'r') as f:
        requirements = [line.strip() for line in f if line.strip() and not line.startswith('#')]
    
    # Extract package names (remove version specifiers)
    packages = []
    for req in requirements:
        # Handle requirements with semicolons (like dataclasses>=0.7; python_version < '3.7')
        if ';' in req:
            req = req.split(';')[0]
        # Get the package name without version specifiers
        package_name = req.split('>=')[0].split('==')[0].split('<=')[0].split('>')[0].split('<')[0].split('!=')[0].strip()
        packages.append(package_name)
    
    # Test each import
    failed_imports = []
    successful_imports = []
    
    for package in packages:
        try:
            # Try to import the package
            importlib.import_module(package.replace('-', '_'))
            successful_imports.append(package)
            print(f"✅ Successfully imported {package}")
        except ImportError as e:
            failed_imports.append((package, str(e)))
            print(f"❌ Failed to import {package}: {str(e)}")
    
    # Print summary
    print("\n=== Import Test Summary ===")
    print(f"Total packages tested: {len(packages)}")
    print(f"Successful imports: {len(successful_imports)}")
    print(f"Failed imports: {len(failed_imports)}")
    
    if failed_imports:
        print("\nFailed imports:")
        for package, error in failed_imports:
            print(f"- {package}: {error}")
        return False
    
    return True

if __name__ == "__main__":
    success = test_imports()
    sys.exit(0 if success else 1) 