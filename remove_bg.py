from rembg import remove
from PIL import Image

input_path = "C:/Users/Lenovo/.gemini/antigravity-ide/brain/9c54c899-a4ab-4948-8778-2a2bfd81ddc3/media__1787047521537.png"
output_path = "d:/Harsimrandeep/public/images/logo.png"

try:
    print(f"Loading image from {input_path}")
    input_img = Image.open(input_path)
    print("Removing background...")
    
    # We can pass post_process_mask=True to improve edges
    output_img = remove(input_img, post_process_mask=True)
    
    output_img.save(output_path, "PNG")
    print(f"Successfully saved to {output_path}")
except Exception as e:
    print(f"Error: {e}")
