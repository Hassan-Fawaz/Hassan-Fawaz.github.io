import os

# Get the current directory
current_directory = os.getcwd()

# List all files in the directory
files = os.listdir(current_directory)

# Iterate over each file
for filename in files:
    # Check if the file matches the pattern "Paper X.md"
    if filename.startswith("Paper ") and filename.endswith(".md"):
        # Extract the number from the filename
        number = filename.split(" ")[1].split(".")[0]
        # Rename the file
        new_filename = "Paper" + number + ".md"
        os.rename(os.path.join(current_directory, filename), os.path.join(current_directory, new_filename))
        print(f"Renamed file from '{filename}' to '{new_filename}'")

