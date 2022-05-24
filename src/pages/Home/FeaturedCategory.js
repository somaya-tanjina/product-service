import React from "react";
import cable from "../../assets/category/cable-converter-48x48.png";
import cpu from "../../assets/category/cpu-48x48.png";
import desktop from "../../assets/category/desktop-48x48.png";
import gadget from "../../assets/category/gadget-48x48.png";
import graphicsCard from "../../assets/category/gpu-48x48.png";
import headphone from "../../assets/category/headphone-48x48.png";
import keyboard from "../../assets/category/keyboard-48x48.png";
import printer from "../../assets/category/printer-48x48.png";
import projector from "../../assets/category/projector-48x48.png";
import router from "../../assets/category/router-48x48.png";
import studioEquipment from "../../assets/category/studio-equipment-48x48-48x48.png";
import webcam from "../../assets/category/webcam-48x48.png";
import mouse from "../../assets/category/mous-48x48.png";
import smartWatch from "../../assets/category/smart-watch-48x48.png";
import SingleFeaturedItem from "./SingleFeaturedItem";

const FeaturedCategory = () => {
    const features = [
        { img: cpu, name: "CPU" },
        { img: desktop, name: "Dekstop" },
        { img: graphicsCard, name: "Graphics Card" },
        { img: headphone, name: "Headphone" },
        { img: keyboard, name: "Keyboard" },
        { img: printer, name: "Printer" },
        { img: projector, name: "Projector" },
        { img: router, name: "Router" },
        { img: studioEquipment, name: "Studio Tool" },
        { img: gadget, name: "Gadget" },
        { img: webcam, name: "Webcam" },
        { img: mouse, name: "Mouse" },
        { img: smartWatch, name: "Smart Watch" },
        { img: cable, name: "Cable" },
    ];
    return (
        <div className="px-3 lg:px-10 py-10">
            <h2 className="text-xl font-semibold text-center">Featured Category</h2>
            <p className="text-center mt-2 mb-8">
                Get Your Desired Product from Featured Category!
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {features.map((featutre, index) => (
                    <SingleFeaturedItem
                        key={index}
                        featutre={featutre}
                    ></SingleFeaturedItem>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategory;
