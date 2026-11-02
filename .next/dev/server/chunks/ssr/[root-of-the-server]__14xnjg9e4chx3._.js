module.exports = [
(()=>{"use strict";return[
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/app/works/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ContentDetail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$microcms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/microcms.ts [app-rsc] (ecmascript)");
;
;
;
;
const revalidate = 60;
async function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$microcms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toStaticParams"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$microcms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWorkIds"])());
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const work = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$microcms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWork"])(id);
    if (!work) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return {
        title: work.title,
        description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$microcms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDescription"])(work),
        openGraph: work.eyecatch ? {
            images: [
                work.eyecatch.url
            ]
        } : undefined
    };
}
async function WorkPage({ params }) {
    const { id } = await params;
    const work = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$microcms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWork"])(id);
    if (!work) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        content: work,
        backHref: "/works",
        backLabel: "作品一覧へ戻る",
        externalUrl: work.url
    }, void 0, false, {
        fileName: "[project]/app/works/[id]/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ContentDetail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Thumbnail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Thumbnail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/site.module.css [app-rsc] (css module)");
;
;
;
;
;
function ContentDetail({ content, backHref, backLabel, externalUrl }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].detail,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: backHref,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].backLink,
                children: [
                    "← ",
                    backLabel
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentDetail.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].pageTitle,
                children: content.title
            }, void 0, false, {
                fileName: "[project]/components/ContentDetail.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            content.publishedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].date,
                dateTime: content.publishedAt,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(content.publishedAt)
            }, void 0, false, {
                fileName: "[project]/components/ContentDetail.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            content.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].lead,
                children: content.description
            }, void 0, false, {
                fileName: "[project]/components/ContentDetail.tsx",
                lineNumber: 31,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].detailImage,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Thumbnail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    title: content.title,
                    image: content.eyecatch,
                    alt: content.eyecatchAlt,
                    sizes: "(max-width: 768px) 100vw, 720px",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/components/ContentDetail.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContentDetail.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].richText,
                dangerouslySetInnerHTML: {
                    __html: content.content
                }
            }, void 0, false, {
                fileName: "[project]/components/ContentDetail.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            externalUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: externalUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                    children: "作品を見る"
                }, void 0, false, {
                    fileName: "[project]/components/ContentDetail.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContentDetail.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContentDetail.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Thumbnail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Thumbnail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/site.module.css [app-rsc] (css module)");
;
;
;
function Thumbnail({ title, image, alt, sizes, priority }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$site$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].thumbnail,
        children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
            src: image.url,
            alt: alt || title,
            fill: true,
            sizes: sizes,
            priority: priority
        }, void 0, false, {
            fileName: "[project]/components/Thumbnail.tsx",
            lineNumber: 17,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            children: title.charAt(0)
        }, void 0, false, {
            fileName: "[project]/components/Thumbnail.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Thumbnail.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/date.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate
]);
function formatDate(date) {
    return new Date(date).toLocaleDateString("ja-JP", {
        timeZone: "Asia/Tokyo",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
}),
"[project]/lib/microcms.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlog",
    ()=>getBlog,
    "getBlogIds",
    ()=>getBlogIds,
    "getBlogs",
    ()=>getBlogs,
    "getDescription",
    ()=>getDescription,
    "getWork",
    ()=>getWork,
    "getWorkIds",
    ()=>getWorkIds,
    "getWorks",
    ()=>getWorks,
    "toStaticParams",
    ()=>toStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$microcms$2d$js$2d$sdk$2f$dist$2f$esm$2f$microcms$2d$js$2d$sdk$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/microcms-js-sdk/dist/esm/microcms-js-sdk.js [app-rsc] (ecmascript)");
;
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = process.env.MICROCMS_API_KEY ?? "";
// キーが未設定のときは0件として扱い、ビルドを止めない
const client = serviceDomain && apiKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$microcms$2d$js$2d$sdk$2f$dist$2f$esm$2f$microcms$2d$js$2d$sdk$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])({
    serviceDomain,
    apiKey
}) : null;
const LIST_FIELDS = "id,title,description,eyecatch,eyecatchAlt,content,publishedAt";
async function getList(endpoint, limit) {
    if (!client) {
        return [];
    }
    const { contents } = await client.getList({
        endpoint,
        queries: {
            limit,
            orders: "-publishedAt",
            fields: LIST_FIELDS
        }
    });
    return contents;
}
async function getIds(endpoint) {
    return client ? client.getAllContentIds({
        endpoint
    }) : [];
}
async function getDetail(endpoint, contentId) {
    if (!client) {
        return null;
    }
    try {
        return await client.getListDetail({
            endpoint,
            contentId
        });
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$microcms$2d$js$2d$sdk$2f$dist$2f$esm$2f$microcms$2d$js$2d$sdk$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMicroCMSRequestError"])(error) && error.status === 404) {
            return null;
        }
        throw error;
    }
}
// APIが未作成のときは0件として扱い、ビルドを止めない
async function emptyIfMissing(request) {
    try {
        return await request;
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$microcms$2d$js$2d$sdk$2f$dist$2f$esm$2f$microcms$2d$js$2d$sdk$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMicroCMSRequestError"])(error) && error.status === 404) {
            return [];
        }
        throw error;
    }
}
function toStaticParams(ids) {
    return (ids.length > 0 ? ids : [
        "none"
    ]).map((id)=>({
            id
        }));
}
function getDescription({ description, content }) {
    if (description) {
        return description;
    }
    const text = content.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
    return text.length > 80 ? `${text.slice(0, 80)}…` : text;
}
const getWorks = (limit = 100)=>getList("works", limit);
const getWork = (id)=>getDetail("works", id);
const getWorkIds = ()=>getIds("works");
const getBlogs = (limit = 100)=>emptyIfMissing(getList("blogs", limit));
const getBlog = (id)=>getDetail("blogs", id);
const getBlogIds = ()=>emptyIfMissing(getIds("blogs"));
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/works/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/works/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14xnjg9e4chx3._.js.map