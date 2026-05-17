#!/bin/bash

# Set the directory where your images are located
IMAGE_DIR="public"

# Find all JPG and JPEG files recursively
find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read -r img_path; do
    # Get the directory and base name of the image
    dir_name=$(dirname "$img_path")
    base_name=$(basename -- "$img_path")
    filename_no_ext="${base_name%.*}"

    # Define the output WebP path
    webp_path="$dir_name/$filename_no_ext.webp"

    echo "Converting $img_path to $webp_path..."

    # Convert the image using ImageMagick
    magick "$img_path" "$webp_path"

    # Check if the conversion was successful
    if [ $? -eq 0 ]; then
        echo "Conversion successful: $webp_path"
        # Remove the original JPG/JPEG file
        rm "$img_path"
        echo "Removed original file: $img_path"
    else
        echo "Error converting $img_path"
    fi
done

echo "All conversions completed."