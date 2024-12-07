#!/usr/bin/env python3
import cohere 
co = cohere.Client('LWWG4B4ZuQEZT8SDeQcI4eZrqPSufsQ5eYHgtHdz') # This is your trial API key
response = co.chat( 
  model='command-r-plus',
  message='<YOUR MESSAGE HERE>',
  temperature=0.3,
  chat_history=[],
  prompt_truncation='AUTO',
  stream=True,
  connectors=[{"id":"web-search"}]
) 
print(response)
