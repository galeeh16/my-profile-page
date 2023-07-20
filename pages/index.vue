<template>
    <Header />

    <div class="mt-36 batasIntersectionObserver"></div>

    <AboutMe />

    <Portfolio />

    <section id="work" class="section">
        <div class="wrapper relative">
            <SubTitle :title="$t('work_experience')" />
            <div class="w-full h-96 p-32">

            </div>
        </div>
    </section>

    <div class="mb-96"></div>
</template>