import urllib.request
import json
import os

api_key = os.environ['YOUTUBE_API_KEY']
channel_id = os.environ['CHANNEL_ID']

url = f"https://www.googleapis.com/youtube/v3/search?key={api_key}&channelId={channel_id}&part=snippet&order=date&maxResults=50&type=video"

with urllib.request.urlopen(url) as response:
    data = json.loads(response.read())

os.makedirs("content/posts/youtube", exist_ok=True)

for item in data.get("items", []):
    video_id = item["id"]["videoId"]
    snippet = item["snippet"]
    title = snippet["title"].replace('"', "'")
    description = snippet["description"][:200]
    published = snippet["publishedAt"][:10]
    thumbnail = snippet["thumbnails"]["high"]["url"]
    
    filename = f"content/posts/youtube/yt-{video_id}.md"
    
    if os.path.exists(filename):
        continue
        
    content = f"""---
title: "{title}"
date: {published}
slug: "yt-{video_id}"
categories:
    - 電玩精華
image: "{thumbnail}"
draft: false
---

{{{{< youtube {video_id} >}}}}

{description}
"""
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
        print(f"新增影片：{title}")