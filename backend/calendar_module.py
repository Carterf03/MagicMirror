import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"]
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def get_calendar_service():
    creds = None
    token_dir = os.path.join(BASE_DIR, "tokens")
    token_path = os.path.join(token_dir, "token.json")
    creds_path = os.path.join(BASE_DIR, "credentials.json")

    # Ensure tokens directory exists
    os.makedirs(token_dir, exist_ok=True)

    # Load existing credentials
    if os.path.exists(token_path):
        creds = Credentials.from_authorized_user_file(token_path, SCOPES)

    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(creds_path, SCOPES)
            creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
        with open(token_path, "w") as token:
            token.write(creds.to_json())

    try:
        return build("calendar", "v3", credentials=creds)

    except HttpError as error:
        print(f"An error occurred: {error}")