#!/usr/bin/env python3
"""Convert PNG images to WebP format."""

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install it with: pip install Pillow")
    sys.exit(1)


def convert_png_to_webp(input_path, output_path=None, quality=80):
    """Convert a single PNG file to WebP."""
    if output_path is None:
        output_path = input_path.with_suffix('.webp')

    with Image.open(input_path) as img:
        img.save(output_path, 'WEBP', quality=quality)

    return output_path


def convert_directory(directory, quality=80, recursive=True):
    """Convert all PNG files in a directory to WebP."""
    directory = Path(directory)
    pattern = '**/*.png' if recursive else '*.png'

    png_files = list(directory.glob(pattern))

    if not png_files:
        print(f"No PNG files found in {directory}")
        return

    print(f"Found {len(png_files)} PNG file(s)")

    for png_file in png_files:
        try:
            webp_file = convert_png_to_webp(png_file, quality=quality)
            original_size = png_file.stat().st_size
            new_size = webp_file.stat().st_size
            savings = ((original_size - new_size) / original_size) * 100
            print(f"Converted: {png_file} -> {webp_file} ({savings:.1f}% smaller)")
        except Exception as e:
            print(f"Error converting {png_file}: {e}")


def main():
    import argparse

    parser = argparse.ArgumentParser(description='Convert PNG images to WebP format')
    parser.add_argument('path', nargs='?', default='.', help='File or directory to convert (default: current directory)')
    parser.add_argument('-q', '--quality', type=int, default=80, help='WebP quality 0-100 (default: 80)')
    parser.add_argument('--no-recursive', action='store_true', help='Do not search subdirectories')

    args = parser.parse_args()
    path = Path(args.path)

    if path.is_file():
        if path.suffix.lower() != '.png':
            print(f"Error: {path} is not a PNG file")
            sys.exit(1)
        webp_file = convert_png_to_webp(path, quality=args.quality)
        print(f"Converted: {path} -> {webp_file}")
    elif path.is_dir():
        convert_directory(path, quality=args.quality, recursive=not args.no_recursive)
    else:
        print(f"Error: {path} does not exist")
        sys.exit(1)


if __name__ == '__main__':
    main()
