import pandas as pd

# Function to combine two Excel files

def combine_excel_files(file1, file2, output_file):
    # Load the two Excel files
    df1 = pd.read_excel(file1)
    df2 = pd.read_excel(file2)

    # Combine the two DataFrames
    combined_df = pd.concat([df1, df2], ignore_index=True)

    # Save the combined DataFrame to a new Excel file
    combined_df.to_excel(output_file, index=False)

# Example usage
if __name__ == '__main__':
    combine_excel_files('file1.xlsx', 'file2.xlsx', 'combined_output.xlsx')
