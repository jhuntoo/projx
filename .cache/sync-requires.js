// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jonathonlee/repos/projx/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-template-js": preferDefault(require("/Users/jonathonlee/repos/projx/src/templates/PostTemplate.js")),
  "component---src-templates-page-template-js": preferDefault(require("/Users/jonathonlee/repos/projx/src/templates/PageTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jonathonlee/repos/projx/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/jonathonlee/repos/projx/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/jonathonlee/repos/projx/src/pages/index.tsx")),
  "component---src-pages-page-2-tsx": preferDefault(require("/Users/jonathonlee/repos/projx/src/pages/page-2.tsx"))
}

exports.json = {
  "layout-index.json": require("/Users/jonathonlee/repos/projx/.cache/json/layout-index.json"),
  "two-things-are-infinite.json": require("/Users/jonathonlee/repos/projx/.cache/json/two-things-are-infinite.json"),
  "be-who-you-are.json": require("/Users/jonathonlee/repos/projx/.cache/json/be-who-you-are.json"),
  "you-only-live-once.json": require("/Users/jonathonlee/repos/projx/.cache/json/you-only-live-once.json"),
  "people-will-forget.json": require("/Users/jonathonlee/repos/projx/.cache/json/people-will-forget.json"),
  "i-am-so-clever.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-am-so-clever.json"),
  "i-have-not-failed.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-have-not-failed.json"),
  "good-friends.json": require("/Users/jonathonlee/repos/projx/.cache/json/good-friends.json"),
  "like-nonsense.json": require("/Users/jonathonlee/repos/projx/.cache/json/like-nonsense.json"),
  "two-things-are-infinite-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/two-things-are-infinite-2.json"),
  "you-only-live-once-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/you-only-live-once-2.json"),
  "be-who-you-are-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/be-who-you-are-2.json"),
  "i-may-not-have-gone.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-may-not-have-gone.json"),
  "there-are-only-two.json": require("/Users/jonathonlee/repos/projx/.cache/json/there-are-only-two.json"),
  "imperfection-is-beauty.json": require("/Users/jonathonlee/repos/projx/.cache/json/imperfection-is-beauty.json"),
  "i-am-so-clever-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-am-so-clever-2.json"),
  "people-will-forget-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/people-will-forget-2.json"),
  "there-are-only-two-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/there-are-only-two-2.json"),
  "good-friends-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/good-friends-2.json"),
  "i-have-not-failed-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-have-not-failed-2.json"),
  "imperfection-is-beauty-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/imperfection-is-beauty-2.json"),
  "like-nonsense-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/like-nonsense-2.json"),
  "i-may-not-have-gone-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-may-not-have-gone-2.json"),
  "be-who-you-are-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/be-who-you-are-3.json"),
  "two-things-are-infinite-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/two-things-are-infinite-3.json"),
  "people-will-forget-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/people-will-forget-3.json"),
  "i-am-so-clever-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-am-so-clever-3.json"),
  "you-only-live-once-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/you-only-live-once-3.json"),
  "imperfection-is-beauty-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/imperfection-is-beauty-3.json"),
  "there-are-only-two-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/there-are-only-two-3.json"),
  "good-friends-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/good-friends-3.json"),
  "i-may-not-have-gone-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-may-not-have-gone-3.json"),
  "i-have-not-failed-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/i-have-not-failed-3.json"),
  "like-nonsense-3.json": require("/Users/jonathonlee/repos/projx/.cache/json/like-nonsense-3.json"),
  "starters.json": require("/Users/jonathonlee/repos/projx/.cache/json/starters.json"),
  "success.json": require("/Users/jonathonlee/repos/projx/.cache/json/success.json"),
  "about.json": require("/Users/jonathonlee/repos/projx/.cache/json/about.json"),
  "dev-404-page.json": require("/Users/jonathonlee/repos/projx/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/jonathonlee/repos/projx/.cache/json/404.json"),
  "index.json": require("/Users/jonathonlee/repos/projx/.cache/json/index.json"),
  "page-2.json": require("/Users/jonathonlee/repos/projx/.cache/json/page-2.json"),
  "404-html.json": require("/Users/jonathonlee/repos/projx/.cache/json/404-html.json")
}