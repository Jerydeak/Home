<template lang="">
    <div class="page-body">
        <section>
            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                <div
                    style="width: 300px; background-color: transparent; align-items: center; display: flex; flex-direction: column;">
                    <div style="width: 200px; height: 200px; border-radius: 100%; overflow: hidden;">
                        <img src="@/assets/photo.jpg" style="width: 100%;">
                    </div>
                    <p style="font-size: 30px; margin-top: 20px;">余豪</p>
                    <!-- <p>余豪</p> -->
                    <p style="margin-top: 10px; color: #aaa">北京航空航天大学</p>
                    <p style="margin-top: 10px; color: #aaa">yuhao2019@buaa.edu.cn</p>
                </div>
                <div style="width: 800px; background-color: transparent; margin-left: 30px; " class="info-container">
                    <p style="font-size: 30px; margin-bottom: 40px; text-indent: 0rem;">个人介绍</p>
                    <p>
                        本人于2019年进入北京航空航天大学，原数学科学学院，于2021年春季转入软件学院2020级，该学年信息大类排名2/1086，现软件学院排名第1名，本学年加权成绩为95.1，获评国家奖学金、学习优秀特等奖等。
                    </p>
                    <p>
                        本人成绩优异，操作系统99分，大学计算机基础（理科）、C语言、算法、数据结构、离散数学(3)等课程均为100分。
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <div style="width: 800px; background-color: transparent;" class="info-container">
                    <p style="font-size: 30px; margin-bottom: 40px; text-indent: 0rem;">学业梦拓</p>
                    <p style="text-indent: 0rem;">
                        本人辅导内容可以为以下方面：
                    </p>
                    <p>
                        （1）C | C++ | Java | Python | C#：各种程序语言的教学与程序设计基础。
                    </p>
                    <p>
                        （2）数据结构 | 算法：基础数据结构（线性结构、树、图等）和进阶数据结构与算法。
                    </p>
                    <p>
                        （3）操作系统：为保证辅导高效率进行，预约前请确保能熟练使用C语言的指针。
                    </p>
                    <p>
                        （4）离散数学 1 | 离散数学 3。
                    </p>
                    <p style="text-indent: 0rem;">
                        周末时间可以协调，但工作日可辅导时间段相对固定。具体来说：
                    </p>
                    <p>
                        （1）工作日（周一至周五）：22:00-次日01:00，相对固定。
                    </p>
                    <p>
                        （2）周末：14:00-次日01:00，可协调。
                    </p>
                    <p style="text-indent: 0rem;">
                        关于辅导时长，单人约一小时，多人约两小时，若知识点未讲完可适量超出时间，但如果剩余内容过多，可以下次继续辅导。
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <div style="width: 800px; background-color: transparent;" class="info-container">
                    <p style="font-size: 30px; margin-bottom: 40px; text-indent: 0rem;">学术研究</p>
                    <p>
                        本人喜欢自然语言处理方向，尤其是自然语言制导的多模态工作。
                    </p>
                </div>
            </div>
        </section>
        <section>
            <div style="display: flex; flex-direction: row; justify-content: center;">
                <div style="width: 800px; background-color: transparent;" class="info-container">
                    <p style="font-size: 30px; margin-bottom: 40px; text-indent: 0rem;">兴趣爱好</p>
                    <p>
                        本人钟爱音乐，喜欢唱歌、弹钢琴、编曲。除此之外，本人还喜欢研究、制作游戏。欢迎感兴趣的伙伴们通过邮箱联系我。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {

    }
</script>

<style scoped>
    .info-container {
        text-align: left;
        font-size: 20px;
        text-indent: 2rem;
    }

    .info-container>p {
        margin: 20px 0px;
    }
</style>

<style scoped>
    .first-letter {
        font-size: 30px;
    }

    .first-letter::first-letter {
        font-size: 45px;
    }

    .page-body {
        min-width: 1200px;
    }

    section {
        padding: 100px 150px;
        /* min-height: 100px; */
        background-color: #fafafa;
    }

    section:nth-of-type(even) {
        background-color: #f0f0f0;
    }


    #container {
        --menu-width: 300px;
        --content-width: 1000px;
        --margin-top: 80px;
        position: relative;
        margin: auto;
        margin-top: var(--margin-top);
        /* max-width: min(1300px, 90vw); */
        width: calc(var(--menu-width) + var(--content-width));
    }

    #menu-container {
        /* display: inline; */
        top: 80px;
        width: var(--menu-width);
        position: sticky;
        background-color: beige;
        height: 100px;
    }

    #content-container {
        /* display: inline; */
        position: relative;
        left: var(--menu-width);
        top: var(--menu-width);

        background-color: aquamarine;
        width: var(--content-width);
        min-height: 1000px;
    }
</style>