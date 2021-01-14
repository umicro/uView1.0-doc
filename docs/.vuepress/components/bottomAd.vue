<template>
    <a
        class="info-box"
        v-if="showAd"
        target="_blank"
        href="https://www.yisu.com/coupon/?f=uview&ystimes=xr10000"
    >

        <div class="left">
            <img src="https://cdn.uviewui.com/uview/resources/156465198324.png" />
            <div class="desc-box">
                <div class="title">移动前端开发者专享红包</div>
                <div class="desc">
                    开发者福利，千元红包可用于云服务器、高防服务器、裸金属服务器、高防IP、云数据库、CDN加速购买和续费
                </div>
            </div>
        </div>
        <div class="right">
            <div class="btn">立即免费领取</div>
        </div>
    </a>
</template>

<script>
export default {
    data() {
        return {
            showAd: true,
        };
    },
    created() {
        // 与广州亿速云的广告合作到期时间为2020-12-25，时间戳为：1608911994000(ms)
        if (+new Date() > 1624636800000) this.showAd = false;
    },
};
</script>

<style lang="scss" scoped>
.info-box {
    margin-top: 3rem;
    display: flex;
    max-width: 900px;
    padding: 20px 30px;
    border: 1px solid rgb(219, 225, 232);
    border-left: 5px solid rgb(255, 68, 69);
    align-items: center;

    .left {
        flex: 1;
        margin-right: 30px;
        display: flex;

        img {
            border-radius: 4px;
            height: 120px;
        }

        .desc-box {
            margin-left: 14px;
            margin-top: 20px;
        }

        .title {
            color: #303133;
            font-size: 17px;
        }

        .desc {
            margin-top: 15px;
            color: #606266;
            font-size: 14px;
        }
    }

    .right {
        .btn {
            border: 1px solid rgb(255, 68, 69);
            border-radius: 4px;
            padding: 0.8rem 1rem;
            color: rgb(255, 68, 69);
            transition: all 0.3s;
            font-size: 0.4rem;

            &:hover {
                color: #ffffff;
                background-color: rgb(255, 68, 69);
            }
        }
    }
}

@media (max-width: 768px) {
    .info-box {
        flex-direction: column;
        padding: 15px;

        .left {
            margin-right: 0;
            display: flex;

            img {
                height: 60px;
            }

            .desc-box {
                margin-top: 0;
            }
        }

        .right {
            margin-top: 25px;
        }
    }
}

</style>