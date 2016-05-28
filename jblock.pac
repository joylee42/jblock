/*
v133
*/
function FindProxyForURL ( url, host ) {
    url = url.toLowerCase();
    host = host.toLowerCase();
    for ( var i = 0; i < jblockHOST.length; i++ ) {
        if ( jblockHOST[i].test( host ) ) {
            return 'PROXY 8.8.8.8:53';
        }
    }
    for ( var j = 0; j < jblockURL.length; j++ ) {
        if ( jblockURL[j].test( url ) ) {
            return 'PROXY 8.8.8.8:53';
        }
    }
    return'DIRECT';
}

var jblockHOST = [
                                 /youtube\.2cnt\.net$/,
                             /ssl-youtube\.2cnt\.net$/,
                         /facebookinc\.122\.2o7\.net$/,
                                 /api\.ad-locus\.com$/,
                                       /ad-x\.co\.uk$/,
                                /ads\.ad2iction\.com$/,
                                    /cdn\.adbert\.cf$/,
                               /www\.adbert\.com\.tw$/,
                         /eventsalt30\.adcolony\.com$/,
                            /iosads24\.adcolony\.com$/,
                                 /ads\.admarvel\.com$/,
                                      /a\.admob\.com$/,
                              /analytics\.admob\.com$/,
                                      /c\.admob\.com$/,
                                      /e\.admob\.com$/,
                                  /media\.admob\.com$/,
                                      /p\.admob\.com$/,
                                   /ytw\.adsbro\.com$/,
                     /ads-east-aws\.adsymptotic\.com$/,
                    /ads-east-colo\.adsymptotic\.com$/,
                    /ads-west-colo\.adsymptotic\.com$/,
                                /c\.adsymptotic\.com$/,
                            /ceast\.adsymptotic\.com$/,
                               /mf\.adsymptotic\.com$/,
                          /aax\.amazon-adsystem\.com$/,
                  /aax-us-east\.amazon-adsystem\.com$/,
              /aax-us-east-rtb\.amazon-adsystem\.com$/,
                  /aax-us-west\.amazon-adsystem\.com$/,
                            /c\.amazon-adsystem\.com$/,
                            /s\.amazon-adsystem\.com$/,
                                /sdk\.appsflyer\.com$/,
                              /track\.appsflyer\.com$/,
                                 /mobads\.baidu\.com$/,
                            /mobads-logs\.baidu\.com$/,
                                   /tags\.bkrtx\.com$/,
                                 /tags\.bluekai\.com$/,
                           /chinacache\.cedexis\.com$/,
                       /fastly2\.bench\.cedexis\.com$/,
                                /radar\.cedexis\.com$/,
                                  /rpt\.cedexis\.com$/,
                             /static\.chartbeat\.com$/,
                               /ping\.chartbeat\.net$/,
                    /d31qbv1cthcecs\.cloudfront\.net$/,
                     /d8rk54i4mohrb\.cloudfront\.net$/,
                                /e\.crashlytics\.com$/,
                         /settings\.crashlytics\.com$/,
                                  /rtax\.criteo\.com$/,
                              /api\.crittercism\.com$/,
                              /apm\.crittercism\.com$/,
                                   /ads\.dotomi\.com$/,
                             /iad-login\.dotomi\.com$/,
                                    /cj\.dotomi\.com$/,
                     /4396156\.fls\.doubleclick\.net$/,
                               /ad\.doubleclick\.net$/,
                             /ad-g\.doubleclick\.net$/,
                           /ad\.tw\.doubleclick\.net$/,
                            /cm\.g\.doubleclick\.net$/,
                     /googleads\.g\.doubleclick\.net$/,
                        /pubads\.g\.doubleclick\.net$/,
                  /securepubads\.g\.doubleclick\.net$/,
                         /stats\.g\.doubleclick\.net$/,
                           /static\.doubleclick\.net$/,
              /content\.yieldmanager\.edgesuite\.net$/,
                         /cdn\.effectivemeasure\.net$/,
                      /me-cdn\.effectivemeasure\.net$/,
                      /me-ssl\.effectivemeasure\.net$/,
                      /us-cdn\.effectivemeasure\.net$/,
                          /beacon\.errorception\.com$/,
                                   /ad\.ettoday\.net$/,
                                 /ads\.facebook\.com$/,
                        /creative\.ak\.facebook\.com$/,
                               /pixel\.facebook\.com$/,
                                /cdn\.fastclick\.net$/,
                                /csp\.fastclick\.net$/,
                             /secure\.fastclick\.net$/,
                           /creative\.ak\.fbcdn\.net$/,
                                    /ad\.flurry\.com$/,
                                 /adlog\.flurry\.com$/,
                                   /ads\.flurry\.com$/,
                                   /api\.flurry\.com$/,
                                   /cdn\.flurry\.com$/,
                                  /data\.flurry\.com$/,
                                   /dev\.flurry\.com$/,
                              /google-analytics\.com$/,
                         /ssl\.google-analytics\.com$/,
                         /www\.google-analytics\.com$/,
                     /pagead2\.googleadservices\.com$/,
                     /partner\.googleadservices\.com$/,
                         /www\.googleadservices\.com$/,
                         /www\.googletagmanager\.com$/,
                        /www\.googletagservices\.com$/,
                     /pagead\.googlesyndication\.com$/,
                    /pagead1\.googlesyndication\.com$/,
                    /pagead2\.googlesyndication\.com$/,
                        /tpc\.googlesyndication\.com$/,
                      /ad-specs\.guoshipartners\.com$/,
                                 /et\.w\.inmobi\.com$/,
                                  /i\.w\.inmobi\.com$/,
                               /sdkm\.w\.inmobi\.com$/,
                            /r\.edge\.inmobicdn\.net$/,
                              /cdnk\.interclick\.com$/,
                             /apiservices\.krxd\.net$/,
                                  /beacon\.krxd\.net$/,
                                     /cdn\.krxd\.net$/,
                                /services\.krxd\.net$/,
                         /analytics\.localytics\.com$/,
                            /service\.maxymiser\.net$/,
                                    /cdn\.media\.net$/,
                             /contextual\.media\.net$/,
                                  /mycdn\.media\.net$/,
                                    /in\.metamx\.com$/,
                          /cm\.send\.microad-cn\.com$/,
                                   /js\.moatads\.com$/,
                                 /json\.moatads\.com$/,
                                /jsonp\.moatads\.com$/,
                                /pixel\.moatads\.com$/,
                                    /s\.moatads\.com$/,
                                    /z\.moatads\.com$/,
                                    /ads\.mopub\.com$/,
                          /cpp\.imp\.mpx\.mopub\.com$/,
                               /ads\.mp\.mydas\.mobi$/,
                   /androidsdk\.ads\.mp\.mydas\.mobi$/,
                            /beacon-1\.newrelic\.com$/,
                            /beacon-2\.newrelic\.com$/,
                            /beacon-3\.newrelic\.com$/,
                            /beacon-4\.newrelic\.com$/,
                            /beacon-5\.newrelic\.com$/,
                            /beacon-6\.newrelic\.com$/,
                            /js-agent\.newrelic\.com$/,
                             /jserror\.newrelic\.com$/,
                    /mobile-collector\.newrelic\.com$/,
                    /staging-beacon-1\.newrelic\.com$/,
                               /api\.optimizely\.com$/,
                               /cdn\.optimizely\.com$/,
                              /cdn2\.optimizely\.com$/,
                              /cdn3\.optimizely\.com$/,
                               /log\.optimizely\.com$/,
                               /static\.parsely\.com$/,
                                  /pixanalytics\.com$/,
                          /falcon\.pixanalytics\.com$/,
                               /s\.pixanalytics\.com$/,
                                /a\.postrelease\.com$/,
                          /adserve\.postrelease\.com$/,
                         /jadserve\.postrelease\.com$/,
                                    /sdk\.e\.qq\.com$/,
                                   /mi\.gdt\.qq\.com$/,
                                    /v\.gdt\.qq\.com$/,
                              /edge\.quantserve\.com$/,
                             /pixel\.quantserve\.com$/,
                               /iadctest\.qwapi\.com$/,
                                   /ads\.revsci\.net$/,
                                    /js\.revsci\.net$/,
                                 /pix01\.revsci\.net$/,
                                 /pix02\.revsci\.net$/,
                                 /pix03\.revsci\.net$/,
                                 /pix04\.revsci\.net$/,
                             /pq-direct\.revsci\.net$/,
                               /match\.rtbidder\.net$/,
                              /ak\.sail-horizon\.com$/,
                             /cdn\.sail-horizon\.com$/,
                          /a\.scorecardresearch\.com$/,
                          /b\.scorecardresearch\.com$/,
                     /beacon\.scorecardresearch\.com$/,
                          /c\.scorecardresearch\.com$/,
                   /download\.scorecardresearch\.com$/,
                      /event\.scorecardresearch\.com$/,
                          /h\.scorecardresearch\.com$/,
                         /sa\.scorecardresearch\.com$/,
                         /sb\.scorecardresearch\.com$/,
                        /udm\.scorecardresearch\.com$/,
                               /adsense\.scupio\.com$/,
                                   /img\.scupio\.com$/,
                                     /u\.scupio\.com$/,
                                     /um\.simpli\.fi$/,
                                   /statcounter\.com$/,
                                /c\.statcounter\.com$/,
                               /c1\.statcounter\.com$/,
                               /c2\.statcounter\.com$/,
                               /c3\.statcounter\.com$/,
                               /c4\.statcounter\.com$/,
                               /c5\.statcounter\.com$/,
                               /c6\.statcounter\.com$/,
                               /c7\.statcounter\.com$/,
                               /c8\.statcounter\.com$/,
                               /c9\.statcounter\.com$/,
                              /c10\.statcounter\.com$/,
                              /c11\.statcounter\.com$/,
                              /c12\.statcounter\.com$/,
                              /c13\.statcounter\.com$/,
                              /c14\.statcounter\.com$/,
                              /c15\.statcounter\.com$/,
                              /c16\.statcounter\.com$/,
                              /c17\.statcounter\.com$/,
                              /c18\.statcounter\.com$/,
                              /c19\.statcounter\.com$/,
                              /c20\.statcounter\.com$/,
                              /c21\.statcounter\.com$/,
                              /c22\.statcounter\.com$/,
                              /c23\.statcounter\.com$/,
                              /c24\.statcounter\.com$/,
                              /c25\.statcounter\.com$/,
                              /c26\.statcounter\.com$/,
                              /c27\.statcounter\.com$/,
                              /c28\.statcounter\.com$/,
                              /c29\.statcounter\.com$/,
                              /c30\.statcounter\.com$/,
                              /c31\.statcounter\.com$/,
                              /c32\.statcounter\.com$/,
                              /c33\.statcounter\.com$/,
                              /c34\.statcounter\.com$/,
                              /c35\.statcounter\.com$/,
                              /c36\.statcounter\.com$/,
                              /c37\.statcounter\.com$/,
                              /c38\.statcounter\.com$/,
                              /c39\.statcounter\.com$/,
                              /c40\.statcounter\.com$/,
                              /c41\.statcounter\.com$/,
                              /c42\.statcounter\.com$/,
                              /c43\.statcounter\.com$/,
                              /c44\.statcounter\.com$/,
                              /c45\.statcounter\.com$/,
                              /c46\.statcounter\.com$/,
                               /es\.statcounter\.com$/,
                               /gs\.statcounter\.com$/,
                               /my\.statcounter\.com$/,
                              /my8\.statcounter\.com$/,
                               /s2\.statcounter\.com$/,
                           /secure\.statcounter\.com$/,
                         /www-beta\.statcounter\.com$/,
                              /www\.statcounter\.com$/,
                         /webservices\.sub2tech\.com$/,
                            /agent\.tamedia\.com\.tw$/,
                                  /pixel\.tapad\.com$/,
                               /a\.thoughtleadr\.com$/,
                                  /tags\.tiqcdn\.com$/,
                                      /ad\.turn\.com$/,
                                      /de\.tynt\.com$/,
                                      /ic\.tynt\.com$/,
                                     /tcr\.tynt\.com$/,
                                    /p\.typekit\.net$/,
                                 /ping\.typekit\.net$/,
                                /serve\.uberads\.com$/,
                                   /alog\.umeng\.com$/,
                                  /log\.umtrack\.com$/,
                           /ads-by\.yieldselect\.com$/,
                                      /m\.vpadn\.com$/,
                                       /m\.vpon\.com$/,
                            /tw\.ad\.adon\.vpon\.com$/,
                                 /cn\.api\.vpon\.com$/,
                                 /tw\.api\.vpon\.com$/,
                                   /img\.vserv\.mobi$/,
                               /phone\.waystorm\.com$/,
                                    /ads\.yahoo\.com$/,
                           /e\.analytics\.yahoo\.com$/,
                          /csc\.beap\.bc\.yahoo\.com$/,
                       /analytics\.query\.yahoo\.com$/,
                              /ad\.yieldmanager\.com$/,
                            /ag\.yieldoptimizer\.com$/,
                          /gtag\.yieldoptimizer\.com$/,
                            /rg\.yieldoptimizer\.com$/,
                           /tag\.yieldoptimizer\.com$/,
                                  /ads\.youtube\.com$/,
  ]

var jblockURL = [
   /http:\/\/attach\.mobile01\.com\/image\/mod_ad\/.*/,
  /http:\/\/attach2\.mobile01\.com\/image\/mod_ad\/.*/,
]
