"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface ImageData {
    title: string
    url: string
    heading: string
    description: string
}

const techzoneImages: ImageData[] = [
    {
        title: "Vision",
        url: "/vision-carousel.png",
        heading: "Our Vision",
        description: "To be a trusted software training institute in Hyderabad, empowering students, working professionals, and career changers with future-ready technology skills and industry-relevant expertise.",
    },
    {
        title: "Mission",
        url: "/mission-carousel.png",
        heading: "Our Mission",
        description: "To deliver high-quality, practical, and industry-focused software training in Hyderabad that helps students, professionals, and career switchers gain real-world skills, career confidence, and long-term growth in the tech industry.",
    },
    {
        title: "Goal",
        url: "/goal-carousel.png",
        heading: "Our Goal",
        description: "To bridge the local skill gap by providing hands-on software courses, expert mentorship, and career-oriented learning opportunities for learners across Hyderabad.",
    },
]

export function TechZoneCarouselDemo() {
    const [opened, setOpened] = useState(0)
    const [inPlace, setInPlace] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [gsapReady, setGsapReady] = useState(false)
    const autoplayTimer = useRef<number | null>(null)

    useEffect(() => {
        const loadScripts = () => {
            if (window.gsap && window.MotionPathPlugin) {
                window.gsap.registerPlugin(window.MotionPathPlugin)
                setGsapReady(true)
                return
            }

            const gsapScript = document.createElement("script")
            gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
            gsapScript.onload = () => {
                const motionPathScript = document.createElement("script")
                motionPathScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js"
                motionPathScript.onload = () => {
                    if (window.gsap && window.MotionPathPlugin) {
                        window.gsap.registerPlugin(window.MotionPathPlugin)
                        setGsapReady(true)
                    }
                }
                document.body.appendChild(motionPathScript)
            }
            document.body.appendChild(gsapScript)
        }

        loadScripts()
    }, [])

    const onClick = (index: number) => {
        if (!disabled) setOpened(index)
    }

    const onInPlace = (index: number) => setInPlace(index)

    const next = useCallback(() => {
        setOpened((currentOpened) => {
            let nextIndex = currentOpened + 1
            if (nextIndex >= techzoneImages.length) nextIndex = 0
            return nextIndex
        })
    }, [])

    const prev = useCallback(() => {
        setOpened((currentOpened) => {
            let prevIndex = currentOpened - 1
            if (prevIndex < 0) prevIndex = techzoneImages.length - 1
            return prevIndex
        })
    }, [])

    useEffect(() => setDisabled(true), [opened])
    useEffect(() => setDisabled(false), [inPlace])

    useEffect(() => {
        if (!gsapReady) return

        if (autoplayTimer.current) {
            clearInterval(autoplayTimer.current)
        }

        autoplayTimer.current = window.setInterval(next, 4500)

        return () => {
            if (autoplayTimer.current) {
                clearInterval(autoplayTimer.current)
            }
        }
    }, [opened, gsapReady, next])

    return (
        <section className="bg-neutral-950 px-4 py-8">
            <div>
                <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-2">Our Journey & Commitment</h2>
                <p className="mx-auto max-w-lg text-center text-sm text-neutral-300 mb-8">
                    Empowering learners across Hyderabad with future-ready technology skills and industry expertise.
                </p>
            </div>

            <div className="flex items-center justify-center relative">
                <div className="relative h-[80vmin] w-[80vmin] max-h-[600px] max-w-[600px] overflow-hidden rounded-[20px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.02),0_6.7px_5.3px_rgba(0,0,0,0.028),0_12.5px_10px_rgba(0,0,0,0.035),0_22.3px_17.9px_rgba(0,0,0,0.042),0_41.8px_33.4px_rgba(0,0,0,0.05),0_100px_80px_rgba(0,0,0,0.07)]">
                    {gsapReady &&
                        techzoneImages.map((image, i) => (
                            <div
                                key={image.url}
                                className="absolute left-0 top-0 h-full w-full"
                                style={{ zIndex: inPlace === i ? i : techzoneImages.length + 1 }}
                            >
                                <GalleryImage
                                    total={techzoneImages.length}
                                    id={i}
                                    url={image.url}
                                    title={image.title}
                                    heading={image.heading}
                                    description={image.description}
                                    open={opened === i}
                                    inPlace={inPlace === i}
                                    onInPlace={onInPlace}
                                />
                            </div>
                        ))}
                    <div className="absolute left-0 top-0 z-[100] h-full w-full pointer-events-none">
                        <Tabs images={techzoneImages} onSelect={onClick} />
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute left-[-60px] sm:left-[-80px] top-1/2 z-[101] flex h-14 w-14 sm:h-16 sm:w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-white/95 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.12)] outline-none transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:border-white/40 hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] active:scale-95 focus-visible:ring-4 focus-visible:ring-white/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    onClick={prev}
                    disabled={disabled}
                    aria-label="Previous"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-800"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <button
                    className="absolute right-[-60px] sm:right-[-80px] top-1/2 z-[101] flex h-14 w-14 sm:h-16 sm:w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-white/95 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.12)] outline-none transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:border-white/40 hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] active:scale-95 focus-visible:ring-4 focus-visible:ring-white/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    onClick={next}
                    disabled={disabled}
                    aria-label="Next"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-800"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            <p className="text-center text-neutral-300 text-sm mt-6 max-w-3xl mx-auto">
                TechZone Academy offers software training programs across multiple branches in Hyderabad, including Lakdikapul, Himayat Nagar, and Tolichowki.
            </p>
        </section>
    )
}

interface GalleryImageProps {
    url: string
    title: string
    heading: string
    description: string
    open: boolean
    inPlace: boolean
    id: number
    onInPlace: (id: number) => void
    total: number
}

function GalleryImage({ url, title, heading, description, open, inPlace, id, onInPlace, total }: GalleryImageProps) {
    const [firstLoad, setLoaded] = useState(true)
    const clip = useRef<SVGCircleElement>(null)

    const gap = 10
    const circleRadius = 7
    const defaults = { transformOrigin: "center center" }
    const duration = 0.4
    const width = 400
    const height = 400
    const scale = 700

    const bigSize = circleRadius * scale
    const overlap = 0

    const getPosSmall = () => ({
        cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
        cy: height - 30,
        r: circleRadius,
    })
    const getPosSmallAbove = () => ({
        cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
        cy: height / 2,
        r: circleRadius * 2,
    })
    const getPosCenter = () => ({ cx: width / 2, cy: height / 2, r: circleRadius * 7 })
    const getPosEnd = () => ({ cx: width / 2 - bigSize + overlap, cy: height / 2, r: bigSize })
    const getPosStart = () => ({ cx: width / 2 + bigSize - overlap, cy: height / 2, r: bigSize })

    useEffect(() => {
        const gsap = window.gsap
        if (!gsap) return

        setLoaded(false)
        if (clip.current) {
            const flipDuration = firstLoad ? 0 : duration
            const upDuration = firstLoad ? 0 : 0.2
            const bounceDuration = firstLoad ? 0.01 : 1
            const delay = firstLoad ? 0 : flipDuration + upDuration

            if (open) {
                gsap
                    .timeline()
                    .set(clip.current, { ...defaults, ...getPosSmall() })
                    .to(clip.current, {
                        ...defaults,
                        ...getPosCenter(),
                        duration: upDuration,
                        ease: "power3.inOut",
                    })
                    .to(clip.current, {
                        ...defaults,
                        ...getPosEnd(),
                        duration: flipDuration,
                        ease: "power4.in",
                        onComplete: () => onInPlace(id),
                    })
            } else {
                gsap
                    .timeline({ overwrite: true })
                    .set(clip.current, { ...defaults, ...getPosStart() })
                    .to(clip.current, {
                        ...defaults,
                        ...getPosCenter(),
                        delay: delay,
                        duration: flipDuration,
                        ease: "power4.out",
                    })
                    .to(clip.current, {
                        ...defaults,
                        motionPath: {
                            path: [getPosSmallAbove(), getPosSmall()],
                            curviness: 1,
                        },
                        duration: bounceDuration,
                        ease: "bounce.out",
                    })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
        >
            <defs>
                <clipPath id={`${id}_circleClip`}>
                    <circle className="clip" cx="0" cy="0" r={circleRadius} ref={clip}></circle>
                </clipPath>
                <clipPath id={`${id}_squareClip`}>
                    <rect className="clip" width={width} height={height}></rect>
                </clipPath>
            </defs>
            <g clipPath={`url(#${id}${inPlace ? "_squareClip" : "_circleClip"})`}>
                <image width={width} height={height} href={url} className="pointer-events-none"></image>
                {inPlace && (
                    <foreignObject x="0" y="0" width={width} height={height}>
                        <div className="flex flex-col items-center justify-center h-full p-8 bg-black/40 backdrop-blur-sm">
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                {heading}
                            </h3>
                            <p className="text-white text-sm md:text-base text-center max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                {description}
                            </p>
                        </div>
                    </foreignObject>
                )}
            </g>
        </svg>
    )
}

interface TabsProps {
    images: ImageData[]
    onSelect: (index: number) => void
}

function Tabs({ images, onSelect }: TabsProps) {
    const gap = 10
    const circleRadius = 7
    const width = 400
    const height = 400

    const getPosX = (i: number) =>
        width / 2 - (images.length * (circleRadius * 2 + gap) - gap) / 2 + i * (circleRadius * 2 + gap)
    const getPosY = () => height - 30

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
        >
            {images.map((image, i) => (
                <g key={image.url} className="pointer-events-auto">
                    <defs>
                        <clipPath id={`tab_${i}_clip`}>
                            <circle cx={getPosX(i)} cy={getPosY()} r={circleRadius} />
                        </clipPath>
                    </defs>
                    <image
                        x={getPosX(i) - circleRadius}
                        y={getPosY() - circleRadius}
                        width={circleRadius * 2}
                        height={circleRadius * 2}
                        href={image.url}
                        clipPath={`url(#tab_${i}_clip)`}
                        className="pointer-events-none"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle
                        onClick={() => onSelect(i)}
                        className="cursor-pointer fill-white/0 stroke-white/70 hover:stroke-white/100 transition-all"
                        strokeWidth="2"
                        cx={getPosX(i)}
                        cy={getPosY()}
                        r={circleRadius + 2}
                    />
                </g>
            ))}
        </svg>
    )
}
