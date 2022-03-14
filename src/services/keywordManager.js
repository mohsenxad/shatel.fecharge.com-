
export default function(service){
    let result = [
        'شاتل',
        'شاتل موبایل',
        'بسته اینترنت',
        'لیست بسته اینترنت',
        'همه بسته اینترنت',
        'شارژ اینترنت',
        'بسته اینترنت شاتل',
        'بسته اینترنتی شاتل',
        'بسته اینترنت شاتل موبایل',
        'بسته اینترنتی شاتل موبایل',
        'معرفی اینترنت شاتل موبایل',
        'معرفی بسته اینترنت شاتل موبایل',
        'معرفی بسته اینترنتی شاتل موبایل',
        'معرفی بسته اینترنتی شاتل موبایل',
    ];
    if(service){
        result.push(
            [
                `${service.title}`,
                `بسته اینترنت ${service.title}`,
                `بسته اینترنت ${service.title} شاتل`,
                `بسته اینترنت ${service.title} شاتل موبایل`,
                `${service.durationTitle}`,
                `بسته اینترنت ${service.durationTitle} ${service.title}`,
                `بسته اینترنت ${service.durationTitle} ${service.title} شاتل`,
                `بسته اینترنت ${service.durationTitle} ${service.title} شاتل موبایل`,
                `خرید بسته اینترنت ${service.durationTitle} ${service.title}`,
                `خرید بسته اینترنت ${service.durationTitle} ${service.title} شاتل`,
                `خرید بسته اینترنت ${service.durationTitle} ${service.title} شاتل موبایل`,
                `معرفی بسته اینترنت ${service.durationTitle} ${service.title}`,
                `معرفی بسته اینترنت ${service.durationTitle} ${service.title} شاتل`,
                `معرفی بسته اینترنت ${service.durationTitle} ${service.title} شاتل موبایل`,
                `آموزش خرید بسته اینترنت ${service.durationTitle} ${service.title}`,
                `آموزی خرید بسته اینترنت ${service.durationTitle} ${service.title} شاتل`,
                `آموزش خرید بسته اینترنت ${service.durationTitle} ${service.title} شاتل موبایل`,
            ]
        )
    }
    return result;
};