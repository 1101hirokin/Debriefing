<template>
    <div id="dazaifuPageContainer" class="pageContainer smartPhoneContainer">
        <div class="smartPhoneContainer_inner">
            <div id="topLogoWrapper" class="horizontal">
                <svg id="topLogo" data-name="icon_dazaifu_red 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                    <defs>
                        <style>
                            .icon_dazaifu_1{fill:#f05;}
                            .icon_dazaifu_2{fill:#d30051;}
                            .icon_dazaifu_3{fill:#af0043;}
                            .icon_dazaifu_4{fill:#660027;}
                            .icon_dazaifu_5{fill:#44001a;}
                        </style>
                    </defs>
                    <circle class="icon_dazaifu_1" cx="300" cy="153.81" r="147.72"/>
                    <circle class="icon_dazaifu_2" cx="452.28" cy="266.5" r="147.72"/>
                    <circle class="icon_dazaifu_3" cx="394.42" cy="446.19" r="147.72"/>
                    <circle class="icon_dazaifu_4" cx="204.06" cy="446.19" r="147.72"/>
                    <circle class="icon_dazaifu_5" cx="147.72" cy="266.5" r="147.72"/>
                    <path class="icon_dazaifu_1" d="M300,6.09a147.72,147.72,0,1,0,0,295.43Z"/>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    metaInfo: {
        title: "太宰府 -Dazaifu",
        titleTemplate: "%s | DEBRIEFING_",
        htmlAttrs: {
        },
        charset: 'utf-8',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'theme-color', content: '#2b2b2b'}
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/Debriefing/dazaifu/image/favicons/favicon.ico' }
        ],
    },
}
</script>

<style lang="scss" scoped>
#topLogoWrapper {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 54px;
    #topLogo {
        max-width: 180px;
        width: 96%;
        margin: 0 auto;
    }
}
</style>