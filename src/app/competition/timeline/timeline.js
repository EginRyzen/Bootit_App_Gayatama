import React from 'react';
import { timelineData } from './data'; // pastikan ini adalah import yang benar
import { useCountdown } from './countdown'; // pastikan ini adalah import yang benar

export default function Timeline() {
    return (
        <div>
            <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-4">
                        <div className="w-full max-w-3xl mx-auto">
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                {timelineData.map((item, index) => {
                                    return (
                                        <TimelineItem key={index} item={item} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TimelineItem({ item }) {
    // Panggil useCountdown di dalam komponen
    const timeLeft = useCountdown(item.endTime);

    return (
        <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${item.status}`}>
            {/* Countdown Timer */}
            <div className="flex y items-center justify-center w-20 h-10 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </div>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-thin text-slate-700">{item.field}</div>
                    <div className="font-bold text-slate-900">{item.title}</div>

                </div>
                <div className="font-thin text-slate-700 mb-1">
                    <span>{item.organizer}</span> | <span>{item.place}</span>
                </div>
                <time className="text-xs font-medium text-indigo-500">{item.dateStart} - {item.dateEnd}</time>
                <div className="text-slate-500 mt-1">{item.description}</div>
            </div>
        </div>
    );
}
