import React from 'react'

export default function Pricing() {
    const joinUsTypes = [
        {
            planType: 'Basic Plan',
            price: '$16',
            features: ['Smart workout plan', 'At home workouts'],
        },
        {
            planType: 'Weekly Plan',
            price: '$25',
            features: ['PRO Gyms', 'Smart workout plan', 'At home workouts'],
        },
        {
            planType: 'Monthly Plan',
            price: '$45',
            features: ['ELITE Gyms & Classes', 'PRO Gyms', 'Smart workout plan', 'At home workouts', 'Personal Training'],
        },
    ];
  return (
    <section class="section__container price__container">
        <h2 class="section__header">OUR PRICING PLAN</h2>
        <p class="section__subheader">Our pricing plan comes with various membership tiers, each tailored to cater to different preferences and fitness aspirations.</p>
        
        <div class="price__grid">
            {joinUsTypes.map(planObj => (
                <div class="price__card">
                    <div class="price__card__content">
                        <h4>{planObj?.planType}</h4>
                        <h3>{planObj?.price}</h3>
                        {planObj?.features?.map(feat => (
                            <p>
                                <i class="ri-checkbox-circle-line"></i>
                                {feat}
                            </p>
                        ))}
                    </div>
                    <button class="btn price__btn">Join Now</button>
                </div>
            ))}
        </div>
    </section>
  )
}
