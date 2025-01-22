"use client";

import React, { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery";
import { IProduct } from "@/models/Product";
import { apiClient } from "@/lib/api-client";
import { Camera, Image, ShoppingCart, Star, Users, Search, ChevronRight } from 'lucide-react';
export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiClient.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className=" mx-auto ">
      {/* <h1 className="text-3xl font-bold mb-8">ImageKit Shop</h1> */}
      <div className="min-h-screen bg-base-300">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl">
            Discover & Download Premium Stock Images
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-2xl">
            Access millions of high-quality photos, illustrations, and vectors from talented creators worldwide.
          </p>
          
          <div className="mt-8 max-w-3xl bg-white rounded-full p-2 flex items-center">
            <Search className="h-6 w-6 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="Search for stunning images..."
              className="w-full px-4 py-2 focus:outline-none bg-white text-black"
            />
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>
      </header>

      {/* Featured Categories */}
      <section className="py-20 bg-base-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Nature",
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
                count: "2.1M+ photos"
              },
              {
                title: "Architecture",
                image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
                count: "1.5M+ photos"
              },
              {
                title: "Business",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
                count: "1.8M+ photos"
              }
            ].map((category, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300 mt-2">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" container  mx-auto px-4 flex-col">

      <ImageGallery products={products} />
      </section>


      {/* Stats Section */}
      <section className="py-20 bg-base-300 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <Image className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="text-4xl font-bold mt-4">10M+</h3>
              <p className="text-gray-600 mt-2">Stock Images</p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="text-4xl font-bold mt-4">100K+</h3>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div>
              <Star className="h-12 w-12 mx-auto text-blue-500" />
              <h3 className="text-4xl font-bold mt-4">4.9/5</h3>
              <p className="text-gray-600 mt-2">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Start Downloading?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and get access to millions of premium images today.
          </p>
          <button className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-flex items-center">
            Get Started Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Camera className="h-8 w-8" />
                <span className="text-2xl font-bold text-white">ImageKit Shop</span>
              </div>
              <p className="text-gray-400">
                Your premier destination for high-quality stock images.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ImageKit Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </main>
  );
}
