import React from "react";
import PromoCard from "./promoCard";
import chefImg from "/chef.png";
import riderImg from "/rider.png";

export default function PartnerSection({ onNavigate }) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-10 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        <PromoCard
          image={chefImg}
          tag="Earn more with lower fees"
          subtitle="Signup as a business"
          title="Partner with us"
          align="left"
          onClick={() => onNavigate?.('contact')}
        />

        <PromoCard
          image={riderImg}
          tag="Avail exclusive perks"
          subtitle="Signup as a rider"
          title="Ride with us"
          align="right"
          onClick={() => onNavigate?.('contact')}
        />

      </div>
    </section>
  );
}