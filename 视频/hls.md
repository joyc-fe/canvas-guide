

## m3u8跨域问题

1. crossdomain.xml 方案存在隐患，配置不够灵活
2. nginx反向代理到cdn

[m3u8各个字段意义解析](https://blog.csdn.net/weixin_41635750/article/details/108066684)

[如何生成HLS协议的M3U8文件](https://zhuanlan.zhihu.com/p/27124892)

https://blog.csdn.net/weixin_33735077/article/details/86362702

[Mac OS环境下媒体文件分割工具mediafilesegmenter的简单使用(生成M3U8 TS文件)] （https://blog.csdn.net/weixin_30451709/article/details/96159415）

## hls标准 
1.https://developer.apple.com/documentation/http_live_streaming/deploying_a_basic_http_live_stream
2.https://developer.apple.com/documentation/http_live_streaming
3.https://developer.apple.com/documentation/http_live_streaming/about_apple_s_http_live_streaming_tools
4.https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming

Mac下如何切片HLS流 https://blog.51cto.com/ljianbing/1899733

https://developer.apple.com/streaming/

## 标准切片

mediafilesegmenter -B ItanoPart -i SamplePartList.m3u8 -t 10  -f ./movie ./touming.mp4


转换过程
```
ffmpeg -i 263043421-1-208.mp4 -f segment -segment_time 60 -segment_format mpegts -segment_list ./video-folder/video_name.m3u8 -c copy -bsf:v h264_mp4toannexb -map 0 ./higherlevel/video-folder/course-%04d.ts
# 转成ts
./ffmpeg -i 263043421-1-208.mp4 -streamid 0:33 -streamid 1:36 out.ts
# ts切片
./ffmpeg -i ./out.ts -c copy -map 0 -f segment -segment_list ./vedio/b.m3u8 -segment_time 5 ./vedio/test-%03d.ts
```

http://www.ffmpeg.org/  官网

使用 ffmpeg 通过以上方法 直接转出来的比较简单，不能在vediojs中播放

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:6
#EXTINF:5.243356,
test-000.ts
#EXTINF:4.800000,
test-001.ts
#EXTINF:5.200000,
test-002.ts
#EXTINF:4.800000,
test-003.ts
#EXTINF:5.200000,
test-004.ts
#EXTINF:4.800000,
test-005.ts
#EXTINF:5.333333,
test-006.ts
#EXTINF:1.233333,
test-007.ts
#EXT-X-ENDLIST

```

```
#EXTM3U

#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="bipbop_audio",LANGUAGE="eng",NAME="BipBop Audio 1",AUTOSELECT=YES,DEFAULT=YES
#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="bipbop_audio",LANGUAGE="eng",NAME="BipBop Audio 2",AUTOSELECT=NO,DEFAULT=NO,URI="alternate_audio_aac_sinewave/prog_index.m3u8"


#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="English",DEFAULT=YES,AUTOSELECT=YES,FORCED=NO,LANGUAGE="en",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/eng/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="English (Forced)",DEFAULT=NO,AUTOSELECT=NO,FORCED=YES,LANGUAGE="en",URI="subtitles/eng_forced/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Français",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="fr",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/fra/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Français (Forced)",DEFAULT=NO,AUTOSELECT=NO,FORCED=YES,LANGUAGE="fr",URI="subtitles/fra_forced/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Español",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="es",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/spa/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="Español (Forced)",DEFAULT=NO,AUTOSELECT=NO,FORCED=YES,LANGUAGE="es",URI="subtitles/spa_forced/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="日本語",DEFAULT=NO,AUTOSELECT=YES,FORCED=NO,LANGUAGE="ja",CHARACTERISTICS="public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound",URI="subtitles/jpn/prog_index.m3u8"
#EXT-X-MEDIA:TYPE=SUBTITLES,GROUP-ID="subs",NAME="日本語 (Forced)",DEFAULT=NO,AUTOSELECT=NO,FORCED=YES,LANGUAGE="ja",URI="subtitles/jpn_forced/prog_index.m3u8"


#EXT-X-STREAM-INF:BANDWIDTH=263851,CODECS="mp4a.40.2, avc1.4d400d",RESOLUTION=416x234,AUDIO="bipbop_audio",SUBTITLES="subs"
gear1/prog_index.m3u8
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=28451,CODECS="avc1.4d400d",URI="gear1/iframe_index.m3u8"

#EXT-X-STREAM-INF:BANDWIDTH=577610,CODECS="mp4a.40.2, avc1.4d401e",RESOLUTION=640x360,AUDIO="bipbop_audio",SUBTITLES="subs"
gear2/prog_index.m3u8
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=181534,CODECS="avc1.4d401e",URI="gear2/iframe_index.m3u8"

#EXT-X-STREAM-INF:BANDWIDTH=915905,CODECS="mp4a.40.2, avc1.4d401f",RESOLUTION=960x540,AUDIO="bipbop_audio",SUBTITLES="subs"
gear3/prog_index.m3u8
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=297056,CODECS="avc1.4d401f",URI="gear3/iframe_index.m3u8"

#EXT-X-STREAM-INF:BANDWIDTH=1030138,CODECS="mp4a.40.2, avc1.4d401f",RESOLUTION=1280x720,AUDIO="bipbop_audio",SUBTITLES="subs"
gear4/prog_index.m3u8
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=339492,CODECS="avc1.4d401f",URI="gear4/iframe_index.m3u8"

#EXT-X-STREAM-INF:BANDWIDTH=1924009,CODECS="mp4a.40.2, avc1.4d401f",RESOLUTION=1920x1080,AUDIO="bipbop_audio",SUBTITLES="subs"
gear5/prog_index.m3u8
#EXT-X-I-FRAME-STREAM-INF:BANDWIDTH=669554,CODECS="avc1.4d401f",URI="gear5/iframe_index.m3u8"

#EXT-X-STREAM-INF:BANDWIDTH=41457,CODECS="mp4a.40.2",AUDIO="bipbop_audio",SUBTITLES="subs"
gear0/prog_index.m3u8

```

