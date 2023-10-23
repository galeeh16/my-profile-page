<template>
    <section id="work" class="section py-6 md:py-8 lg:py-12 xl:pt-10 xl:pb-40">
        <div class="wrapper relative">
            <SubTitle :title="$t('work_experience')" />

            <div class="mt-4">
                <div v-for="work in workExperiences" :key="work.id"
                    class="pt-0 pr-0 pb-5 pl-5 border-l-2 border-l-primary relative before:bg-dark before:border-2 before:border-primary before:top-[5px] before:content=[''] before:absolute before:w-4 before:h-4 before:-left-[9px] before:rounded-full">
                    <p class="leading-[28px] text-lg xl:text-xl text-primary font-semibold mb-2">{{ work.office }}</p>
                    <p class="italic leading-[28px]">
                        <span v-html="work.desc"></span>
                        <!-- <div v-html="work.desc"></div> -->
                    </p>

                    <ul class="pl-5 mt-4 list-disc">
                        <li class="pb-3.5" v-for="item in work.list" :key="item.id">
                            <div v-html="item.text"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const workExperiences = [
    {
        id: 1,
        office: 'KOPNUSPOS',
        desc: `Programmer at <a target="_blank" href="https://www.kopnuspos.com/" class="italic font-medium text-primary hover:underline">KOPNUSPOS</a> (Nov 2019 - Present)`,
        list: [
            { id: '1-1', text: 'Research, design and develop software system who client needs.' },
            { id: '1-2', text: 'Develop existing program or creating program by analyzing and understanding source code for modification.' },
            { id: '1-3', text: 'Maintenance system.' },
            { id: '1-4', text: 'Creating Merchant Kopnuspos with Laravel & Vue JS' },
            { id: '1-5', text: 'Creating Kopnuspostaspen Dashbord with Laravel & Vue JS' },
            { id: '1-6', text: 'Creating API Gateway Host to Host (Seabank, BCA Digital, KB Bukopin Syariah) with Express Gateway' },
            { id: '1-7', text: 'Creating API Host to Host with Lumen' },
            { id: '1-8', text: 'Creating API BCA Digital with Lumen' },
            { id: '1-9', text: 'Creating API with Laravel.' },
            { id: '1-10', text: 'Creating Front CBS Web with Laravel.' },
            { id: '1-11', text: 'Creating Backend CBS Web with Laravel.' },
            { id: '1-12', text: 'Creating MIS with Laravel.' },
            { id: '1-13', text: 'Creating KDIGI-BO-WEB with Laravel.' },
            { id: '1-14', text: 'Creating API Module Lending for CBS with Lumen' },
            { id: '1-15', text: 'Creating API Module Funding for CBS with Lumen' },
            { id: '1-16', text: 'Creating API Module Funding for CBS with Lumen' },
            { id: '1-17', text: 'Creating Service Reporting Web for CBS with Lumen' },
            { id: '1-18', text: 'Creating Service CRUD for CBS with Lumen' },
            { id: '1-19', text: 'Creating Service HBHT for CBS with Lumen' },
            { id: '1-20', text: 'Creating Authentication Service for CBS with Lumen' },
            { id: '1-21', text: 'Monitoring System with graphic output for user (Build with Laravel).' },
            { id: '1-22', text: 'Creating API Gateway for Host to Host Bukopin Syariah with Express Gateway.' },
            { id: '1-23', text: 'Creating KOPNUSPOSTASPEN Dashboard with Laravel, Vue JS.' },
            { id: '1-24', text: 'Creating Merchant Dashboard for Admin with Laravel.' },
            { id: '1-25', text: 'Creating Front KopnusCuanpao for with Vue JS.' },
            { id: '1-26', text: 'Creating Backend KopnusCuanpao for with Lumen.' },
            { id: '1-27', text: 'Creating Backend Host to Host with Seabank.' },
            { id: '1-28', text: 'Creating Backend Host to Host with Bank Kalsel.' },
            { id: '1-29', text: 'Creating Backend Host to Host with Hana Bank.' },
            { id: '1-30', text: 'Creating Backend Host to Host with Bukopin.' },
        ]
    },
    {
        id: 2,
        office: 'INARTS',
        desc: `Junior Programmer at <a target="_blank" href="http://www.inarts.co.id/" class="italic font-medium text-primary hover:underline">PT. Inti Artistika Solusitama</a> (Oct 2018 - Oct 2019)`,
        list: [
            { id: '2-1', text: 'Reseacrh, design and develop software system who client needs.' },
            { id: '2-2', text: 'Develop existing program or creating program by analyzing and understanding source code for modification.' },
            { id: '2-3', text: 'Maintenance system.' },
            { id: '2-4', text: `Creating <a target="_blank" href="https://www.youb.id/" class="text-primary font-medium hover:underline">youb.id</a> with PHP (Webid)` },
            { id: '2-5', text: 'Creating API with Django.' },
            { id: '2-6', text: 'Creating API with Laravel.' },
            { id: '2-7', text: 'Creating Admin Dashboard with React.' },
        ]
    },
    {
        id: 3,
        office: 'Freelance Web Developer',
        desc: 'Freelance Web Developer (2017 - Present)',
        list: [
            { id: '3-1', text: `Creating <a target="_blank" href="https://logee.id/" class="text-primary font-medium hover:underline">Logee</a> (a subsidiary of Telkom) with Laravel` },
            { id: '3-2', text: 'Creating Dextop Dashboard (Backoffice for Telkom DEX Team) with Laravel.' },
            { id: '3-3', text: 'Creating KPU Web Dashboard Cianjur with Laravel.' },
            { id: '3-4', text: 'Creating <a target="_blank" href="https://disnakertrans.cianjurkab.go.id/skm/" class="text-primary font-medium hover:underline">SKM</a> (Survey App for Disnakertrans) Cianjur.' },
            { id: '3-5', text: 'Creating <a target="_blank" href="https://bisnisdidubai.com" class="text-primary font-medium hover:underline">BisnisDiDubai</a> with NuxtJS.' },
        ]
    },
    {
        id: 4,
        office: 'Freelance Photographer',
        desc: 'Freelance Photographer (2016 - 2017)',
        list: [
            { id: '4-1', text: 'Photographing events and editing photos.' }
        ]
    }
];
</script>