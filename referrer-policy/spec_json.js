var SPEC_JSON = {"subresource_path": {"img-tag": "/referrer-policy/generic/subresource/image.py", "fetch-request": "/referrer-policy/generic/subresource/xhr.py", "a-tag": "/referrer-policy/generic/subresource/document.py", "area-tag": "/referrer-policy/generic/subresource/document.py", "iframe-tag": "/referrer-policy/generic/subresource/document.py", "xhr-request": "/referrer-policy/generic/subresource/xhr.py", "worker-request": "/referrer-policy/generic/subresource/worker.py", "script-tag": "/referrer-policy/generic/subresource/script.py"}, "test_expansion_schema": {"origin": ["same-origin", "cross-origin"], "subresource": ["iframe-tag", "img-tag", "script-tag", "a-tag", "area-tag", "xhr-request", "worker-request", "fetch-request"], "target_protocol": ["http", "https"], "expansion": ["default", "override"], "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer", "rel-noreferrer"], "redirection": ["no-redirect", "keep-origin-redirect", "swap-origin-redirect"], "referrer_url": ["omitted", "origin", "stripped-referrer"], "source_protocol": ["http", "https"]}, "specification": [{"specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policies", "referrer_policy": null, "title": "Referrer Policy is not explicitly defined", "test_expansion": [{"origin": "*", "name": "insecure-protocol", "target_protocol": "http", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "http", "subresource": "*"}, {"origin": "*", "name": "upgrade-protocol", "target_protocol": "https", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "http", "subresource": "*"}, {"origin": "*", "name": "downgrade-protocol", "target_protocol": "http", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "omitted", "source_protocol": "https", "subresource": "*"}, {"origin": "*", "name": "secure-protocol", "target_protocol": "https", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "https", "subresource": "*"}], "name": "unset-referrer-policy", "description": "Check that referrer URL follows no-referrer-when-downgrade policy when no explicit Referrer Policy is set."}, {"specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-no-referrer", "referrer_policy": "no-referrer", "title": "Referrer Policy is set to 'no-referrer'", "test_expansion": [{"origin": "*", "name": "generic", "target_protocol": "*", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "omitted", "source_protocol": "*", "subresource": "*"}], "name": "no-referrer", "description": "Check that sub-resource never gets the referrer URL."}, {"specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-no-referrer-when-downgrade", "referrer_policy": "no-referrer-when-downgrade", "title": "Referrer Policy is set to 'no-referrer-when-downgrade'", "test_expansion": [{"origin": "*", "name": "insecure-protocol", "target_protocol": "http", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "http", "subresource": "*"}, {"origin": "*", "name": "upgrade-protocol", "target_protocol": "https", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "http", "subresource": "*"}, {"origin": "*", "name": "downgrade-protocol", "target_protocol": "http", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "omitted", "source_protocol": "https", "subresource": "*"}, {"origin": "*", "name": "secure-protocol", "target_protocol": "https", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "https", "subresource": "*"}], "name": "no-referrer-when-downgrade", "description": "Check that non a priori insecure subresource gets the full Referrer URL. A priori insecure subresource gets no referrer information."}, {"specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-origin", "referrer_policy": "origin", "title": "Referrer Policy is set to 'origin'", "test_expansion": [{"origin": "*", "name": "generic", "target_protocol": "*", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "origin", "source_protocol": "*", "subresource": "*"}], "name": "origin", "description": "Check that all subresources in all casses get only the origin portion of the referrer URL."}, {"specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-same-origin", "referrer_policy": "same-origin", "title": "Referrer Policy is set to 'same-origin'", "test_expansion": [{"origin": "same-origin", "name": "same-origin-insecure", "target_protocol": "http", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "http", "subresource": "*"}, {"origin": "same-origin", "name": "same-origin-secure-default", "target_protocol": "https", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "https", "subresource": "*"}, {"origin": "same-origin", "name": "same-origin-insecure", "target_protocol": "*", "expansion": "override", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "swap-origin-redirect", "referrer_url": "omitted", "source_protocol": "*", "subresource": "*"}, {"origin": "cross-origin", "name": "cross-origin", "target_protocol": "*", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "omitted", "source_protocol": "*", "subresource": "*"}], "name": "same-origin", "description": "Check that cross-origin subresources get no referrer information and same-origin get the stripped referrer URL."}, {"specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-origin-when-cross-origin", "referrer_policy": "origin-when-cross-origin", "title": "Referrer Policy is set to 'origin-when-cross-origin'", "test_expansion": [{"origin": "same-origin", "name": "same-origin-insecure", "target_protocol": "http", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "http", "subresource": "*"}, {"origin": "same-origin", "name": "same-origin-secure-default", "target_protocol": "https", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "https", "subresource": "*"}, {"origin": "same-origin", "name": "same-origin-upgrade", "target_protocol": "https", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "origin", "source_protocol": "http", "subresource": "*"}, {"origin": "same-origin", "name": "same-origin-downgrade", "target_protocol": "https", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "origin", "source_protocol": "http", "subresource": "*"}, {"origin": "same-origin", "name": "same-origin-insecure", "target_protocol": "*", "expansion": "override", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "swap-origin-redirect", "referrer_url": "origin", "source_protocol": "*", "subresource": "*"}, {"origin": "cross-origin", "name": "cross-origin", "target_protocol": "*", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "origin", "source_protocol": "*", "subresource": "*"}], "name": "origin-when-cross-origin", "description": "Check that cross-origin subresources get the origin portion of the referrer URL and same-origin get the stripped referrer URL."}, {"specification_url": "https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-unsafe-url", "referrer_policy": "unsafe-url", "title": "Referrer Policy is set to 'unsafe-url'", "test_expansion": [{"origin": "*", "name": "generic", "target_protocol": "*", "expansion": "default", "delivery_method": ["http-rp", "meta-referrer", "meta-csp", "attr-referrer"], "redirection": "*", "referrer_url": "stripped-referrer", "source_protocol": "*", "subresource": "*"}], "name": "unsafe-url", "description": "Check that all sub-resources get the stripped referrer URL."}], "referrer_policy_schema": [null, "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "origin-when-cross-origin", "unsafe-url"], "excluded_tests": [{"origin": "cross-origin", "name": "cross-origin-workers", "target_protocol": "*", "expansion": "*", "delivery_method": "*", "redirection": "*", "referrer_url": "*", "source_protocol": "*", "subresource": "worker-request"}, {"origin": "*", "name": "upgraded-protocol-workers", "target_protocol": "https", "expansion": "*", "delivery_method": "*", "redirection": "*", "referrer_url": "*", "source_protocol": "http", "subresource": "worker-request"}, {"origin": "*", "name": "mixed-content-insecure-subresources", "target_protocol": "http", "expansion": "*", "delivery_method": "*", "redirection": "*", "referrer_url": "*", "source_protocol": "https", "subresource": "*"}, {"origin": "*", "name": "elements-not-supporting-attr-referrer", "target_protocol": "*", "expansion": "*", "delivery_method": ["attr-referrer"], "redirection": "*", "referrer_url": "*", "source_protocol": "*", "subresource": ["script-tag", "xhr-request", "worker-request", "fetch-request"]}, {"origin": "*", "name": "elements-not-supporting-rel-noreferrer", "target_protocol": "*", "expansion": "*", "delivery_method": ["rel-noreferrer"], "redirection": "*", "referrer_url": "*", "source_protocol": "*", "subresource": ["iframe-tag", "img-tag", "script-tag", "xhr-request", "worker-request", "fetch-request", "area-tag"]}, {"origin": "*", "name": "area-tag", "target_protocol": "*", "expansion": "*", "delivery_method": "*", "redirection": "*", "referrer_url": "*", "source_protocol": "*", "subresource": "area-tag"}, {"origin": "*", "name": "worker-requests-with-swap-origin-redirect", "target_protocol": "*", "expansion": "*", "delivery_method": "*", "redirection": "swap-origin-redirect", "referrer_url": "*", "source_protocol": "*", "subresource": ["worker-request"]}, {"origin": "*", "name": "overhead-for-redirection", "target_protocol": "*", "expansion": "*", "delivery_method": "*", "redirection": ["keep-origin-redirect", "swap-origin-redirect"], "referrer_url": "*", "source_protocol": "*", "subresource": ["a-tag", "area-tag"]}, {"origin": "*", "name": "source-https-unsupported-by-web-platform-tests-runners", "target_protocol": "*", "expansion": "*", "delivery_method": "*", "redirection": "*", "referrer_url": "*", "source_protocol": "https", "subresource": "*"}]};
