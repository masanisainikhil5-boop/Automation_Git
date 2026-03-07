def find_duplicates(email_list):
    duplicates = []
    for i in range(len(email_list)):
        # Look at every email after the current one
        for j in range(i + 1, len(email_list)):
            # If we find a match and haven't recorded it yet...
            if email_list[i] == email_list[j]:
                if email_list[i] not in duplicates:
                    duplicates.append(email_list[i])
                break 
    return duplicates

find_duplicates(emails)