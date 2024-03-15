import React from "react";
import { Route } from "react-router-dom";

import Hero from "../components/Hero";
import RecentEvents from "../components/RecentEvents";
import Atronaunts from "../components/Atronaunts";
import HeldEvents from "../components/HeldEvents";
import Socials from "../components/Socials";
import UpcomingEvents from "../components/UpcomingEvents";

const routes = (
  <>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<RecentEvents />} />
    <Route path="/astro" element={<Atronaunts />} />
    <Route path="/club" element={<HeldEvents />} />
    <Route path="/team" element={<Socials />} />

    <Route path="/blog" element={<UpcomingEvents />} />
  </>
);

export default routes;
