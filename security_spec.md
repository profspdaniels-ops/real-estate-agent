# Security Specification - GEMKOL FZE

## Data Invariants
1.  **Public Content**: Companies, Products, Properties, Projects, and Media are publicly readable.
2.  **Admin Control**: Only authenticated administrators can create, update, or delete public content.
3.  **Enquiries**: Any visitor can create an enquiry. Only administrators can list or read enquiries.
4.  **Admin Identity**: Admin status is verified by checking for a document in the `admins` collection with the user's UID.

## The "Dirty Dozen" Payloads

1.  **Anonymous Create Company**: Attempt to create a company document without being an admin.
2.  **Self-Assigned Admin**: Attempt to create a document in the `admins` collection.
3.  **Shadow Field Update**: Attempt to add an unauthorized field `isFeatured: true` to a product.
4.  **Enquiry Data Scraping**: Attempt to list all enquiries as a non-admin.
5.  **Malicious ID Injection**: Attempt to create a company with a 1MB string as the ID.
6.  **Type Mismatch**: Attempt to update a product price with a Boolean.
7.  **Email Spoofing**: Attempt to read private data by spoofing an admin email (without verification).
8.  **Immutable Field Mutation**: Attempt to change `createdAt` on an enquiry.
9.  **Terminal State Shortcut**: Attempt to set an enquiry status to `replied` without proper validation.
10. **Orphaned Product**: Attempt to create a product for a non-existent company.
11. **Size Limit Bypass**: Attempt to upload a 5000 character description for a company.
12. **Public Write**: Attempt to delete a project as a standard signed-in user.

## Security Rules Strategy
-   **Master Gate**: All writes validated via `isValid[Entity]` helpers.
-   **RBAC**: Admin check via `exists(/databases/$(database)/documents/admins/$(request.auth.uid))`.
-   **Immutability**: `createdAt` and `ownerId` (if applicable) are immutable.
-   **Server Timestamps**: All `createdAt` and `updatedAt` fields must use `request.time`.
