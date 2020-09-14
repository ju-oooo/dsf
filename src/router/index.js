import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const loadView = (view) => () =>
    import (`@/views/${view}.vue`);

const routes = [{
        path: '/',
        name: 'Index',
        component: loadView('index')
    },
    {
        path: '/clockIn',
        name: 'ClockIn',
        component: loadView('index/clockIn')
    },
    {
        path: '/inviteFriends',
        name: 'InviteFriends',
        component: loadView('index/inviteFriends')
    },
    {
        path: '/search',
        name: 'Search',
        component: loadView('index/search')
    },
    {
        path: '/release',
        name: 'Release',
        component: loadView('index/release')
    },
    {
        path: '/approve',
        name: 'Approve',
        component: loadView('index/approve')
    },
    {
        path: '/detail',
        name: 'Detail',
        component: loadView('index/detail')
    },
    {
        path: '/uploadFile',
        name: 'UploadFile',
        component: loadView('index/uploadFile')
    },
    {
        path: '/pay',
        name: 'Pay',
        component: loadView('index/pay')
    },
    {
        path: '/appraisal',
        name: 'Appraisal',
        component: loadView('index/appraisal')
    },
    {
        path: '/order',
        name: 'Order',
        component: loadView('order')
    },
    {
        path: '/mine',
        name: 'Mine',
        component: loadView('mine')
    },
    {
        path: '/transaction',
        name: 'Transaction',
        component: loadView('mine/transaction')
    },
    {
        path: '/wallet',
        name: 'Wallet',
        component: loadView('mine/wallet')
    },
    {
        path: '/withdraw',
        name: 'Withdraw',
        component: loadView('mine/withdraw')
    },
    {
        path: '/news',
        name: 'News',
        component: loadView('mine/news')
    },
    {
        path: '/setting',
        name: 'Setting',
        component: loadView('mine/setting')
    },
    {
        path: '/info',
        name: 'Info',
        component: loadView('mine/info')
    },
    {
        path: '/historicalEvaluation',
        name: 'HistoricalEvaluation',
        component: loadView('mine/historicalEvaluation')
    },
    {
        path: '/pointsRanking',
        name: 'PointsRanking',
        component: loadView('pointsRanking')
    },
    {
        path: '/pointsReward',
        name: 'PointsReward',
        component: loadView('pointsRanking/pointsReward')
    },
    {
        path: '/description',
        name: 'Description',
        component: loadView('pointsRanking/description')
    },
    {
        path: '/forum',
        name: 'Forum',
        component: loadView('forum')
    },
    {
        path: '/article',
        name: 'Article',
        component: loadView('forum/article')
    },
    {
        path: '/topic',
        name: 'Topic',
        component: loadView('forum/topic')
    },
    {
        path: '/myPosts',
        name: 'MyPosts',
        component: loadView('forum/myPosts')
    },


]

const router = new VueRouter({
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
    routes
})

export default router