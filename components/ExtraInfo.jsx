"use client"

import React, { useState } from 'react'


const ExtraInfo = () => {
    const [activeTab, setActiveTab] = useState('description')

    return (
        <div className="extra-info">
            <div className="info-categories mt-5 flex gap-3">
                <button className='btn btn-dim' onClick={() => setActiveTab("description")}>Description</button>
                <button className='btn btn-dim' onClick={() => setActiveTab("reviews")}>Reviews</button>
                <button className='btn btn-dim' onClick={() => setActiveTab("gallery")}>Gallery</button>
                <button className='btn btn-dim' onClick={() => setActiveTab("iterations")}>Iterations</button>
                <button className='btn btn-dim' onClick={() => setActiveTab("includes")}>Includes/Excludes</button>
                <button className='btn btn-dim' onClick={() => setActiveTab("queries")}>Queries</button>
            </div>
            <div className="extra-info-container py-5">
                {activeTab === 'description' &&
                    <div className="description border border-gray-600 p-5 rounded-md">
                        <h3 className='font-bold mb-3 text-2xl'>Description</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque harum rerum sed sapiente maxime voluptatem tempora doloribus sequi, odio accusantium nihil quasi numquam rem explicabo iusto nostrum aspernatur totam tempore.
                    </div>
                }

                {activeTab === 'reviews' &&
                    <div className="description border border-gray-600 p-5 rounded-md">
                        <h3 className='font-bold mb-3 text-2xl'>Reviews</h3>
                        <div className="reviews mb-3">
                            <div className="review bg-gray-900 p-5 rounded-md border border-gray-700">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et inventore, deleniti harum ex dolores eius, sapiente porro, numquam enim itaque similique praesentium ut sunt corrupti officia rerum temporibus delectus.
                                </p>
                                <div className="user border-l-4 border-green-800 pl-4 mt-3">
                                    <h2>User Name</h2>
                                    <p>Address</p>
                                </div>
                            </div>
                        </div>
                        <div className="reviews mb-3">
                            <div className="review bg-gray-900 p-5 rounded-md border border-gray-700">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et inventore, deleniti harum ex dolores eius, sapiente porro, numquam enim itaque similique praesentium ut sunt corrupti officia rerum temporibus delectus.
                                </p>
                                <div className="user border-l-4 border-green-800 pl-4 mt-3">
                                    <h2>User Name</h2>
                                    <p>Address</p>
                                </div>
                            </div>
                        </div>
                        <div className="reviews mb-3">
                            <div className="review bg-gray-900 p-5 rounded-md border border-gray-700">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et inventore, deleniti harum ex dolores eius, sapiente porro, numquam enim itaque similique praesentium ut sunt corrupti officia rerum temporibus delectus.
                                </p>
                                <div className="user border-l-4 border-green-800 pl-4 mt-3">
                                    <h2>User Name</h2>
                                    <p>Address</p>
                                </div>
                            </div>
                        </div>
                        <div className="reviews mb-3">
                            <div className="review bg-gray-900 p-5 rounded-md border border-gray-700">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et inventore, deleniti harum ex dolores eius, sapiente porro, numquam enim itaque similique praesentium ut sunt corrupti officia rerum temporibus delectus.
                                </p>
                                <div className="user border-l-4 border-green-800 pl-4 mt-3">
                                    <h2>User Name</h2>
                                    <p>Address</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {activeTab === 'gallery' &&
                    <div className="description border border-gray-600 p-5 rounded-md">
                        <h3 className='font-bold mb-3 text-2xl'>Gallery</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque harum rerum sed sapiente maxime voluptatem tempora doloribus sequi, odio accusantium nihil quasi numquam rem explicabo iusto nostrum aspernatur totam tempore.
                    </div>
                }

                {activeTab === 'iterations' &&
                    <div className="description border border-gray-600 p-5 rounded-md">
                        <h3 className='font-bold mb-3 text-2xl'>Iterations</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque harum rerum sed sapiente maxime voluptatem tempora doloribus sequi, odio accusantium nihil quasi numquam rem explicabo iusto nostrum aspernatur totam tempore.
                    </div>
                }

                {activeTab === 'includes' &&
                    <div className="description border border-gray-600 p-5 rounded-md">
                        <h3 className='font-bold mb-3 text-2xl'>Includes/Excludes</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque harum rerum sed sapiente maxime voluptatem tempora doloribus sequi, odio accusantium nihil quasi numquam rem explicabo iusto nostrum aspernatur totam tempore.
                    </div>
                }

                {activeTab === 'queries' &&
                    <div className="description border border-gray-600 p-5 rounded-md">
                        <h3 className='font-bold mb-3 text-2xl'>Queries</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque harum rerum sed sapiente maxime voluptatem tempora doloribus sequi, odio accusantium nihil quasi numquam rem explicabo iusto nostrum aspernatur totam tempore.
                    </div>
                }
            </div>
        </div>
    )
}

export default ExtraInfo