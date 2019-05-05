<template>
    <Layout>
        <!-- query result will be placed within the $page instance property so it can be inserted here -->
        <div v-html="$page.post.content"></div>
    </Layout>
</template>

// GraphQL layer to access the data to query the right post
<page-query>
    query Post ($path: String!) {
        post: post (path: $path) {
            title
            content
        }
    }
</page-query>

<script>
export default {
    // computed property, using vue-meta
    // full control for meta info for SEO, social media, metadata purposes
    // use $page to access the post data
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }
}
</script>

