import React from 'react';
import HeroImage from '../assets/images/heroimage.svg';
import featureImg from '../assets/images/image-1.jfif';
import featureImg2 from '../assets/images/image-2.jfif';
import LogoSimas from '../assets/images/SIMAS.png';
import LogoUnm from '../assets/images/logo-unm.png'
import LogoNic from '../assets/images/logo-nic.webp'

const SeminarInfo = () => {
  return (
<>
<section className="bg-white dark:bg-gray-900 h-[45rem] pt-0 lg:pt-20">
  <div className="grid max-w-screen-xl px-4  pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
    <div className="mr-auto lg:ml-14 place-self-center lg:col-span-7 mt-10">
      <h1 className="max-w-2xl mb-4 lg:mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
      Kelola Seminar Anda dengan Mudah
      </h1>
      <p className="max-w-2xl mb-6 font-medium font-sans text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      Platform modern untuk mengatur seminar, mulai dari registrasi hingga laporan akhir, semuanya dalam satu tempat.
      </p>
      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
  <a
    href="#"
    className="hover:text-white inline-flex items-center justify-center w-full px-16 py-3 text-xl font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto relative overflow-hidden group"
  >
    <span className="absolute inset-0 bg-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
    <span className="relative z-10 ">Mulai Seminar</span>
  </a>
</div>

    </div>
    <div class=" lg:mt-0 lg:col-span-5 lg:flex">
                <img src={HeroImage} alt="hero image"/>
            </div>  
  </div>
</section>

    
  
    <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-md pb-8 mx-auto lg:pb-16">
            <div class="grid grid-cols-3  text-gray-500 lg:grid-cols-3 dark:text-gray-400">
                <a href="#" class="flex items-center lg:justify-center">
                  <img src={LogoSimas} alt="logo simas" />                    
                </a>
                <a href="#" class="flex items-center lg:justify-center">
                <img src={LogoUnm} alt="logo UNM" className='h-20 w-auto'/>                                              
                </a>
                <a href="#" class="flex items-center lg:justify-center">
                <img src={LogoNic} alt="logo NIC" className='h-20 w-auto'/>                                                                     
                </a>
    

            </div>
        </div>
    </section>
    
  
    <section class="bg-gray-50 dark:bg-gray-800" id='feature'>
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Mengapa anda harus memilih SIMAS?</h2>
                    <p class="mb-8 font-light lg:text-xl">Temukan berbagai keunggulan yang menjadikan SIMAS solusi terbaik untuk manajemen seminar Anda.</p>
                   
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Presensi kehadiran dengan QR Code</span>
                        </li>
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Laporan Seminar Otomatis</span>
                        </li>
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Antarmuka Mudah Digunakan</span>
                        </li>
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Generate otomatis Sertifikat</span>
                        </li>
                    </ul>
                    <p class="mb-8 font-light lg:text-xl">Semua fitur ini dirancang untuk memberikan pengalaman seminar yang lebih mudah, cepat, dan profesional. Pilih SIMAS sebagai partner terbaik Anda</p>
                </div>
                <img class="w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={featureImg} alt="dashboard feature image"/>
            </div>
          
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Keunggulan yang Kami Tawarkan</h2>
                    <p class="mb-8 font-light lg:text-xl">Kami menghadirkan solusi inovatif yang dirancang untuk memberikan pengalaman seminar terbaik.</p>
                   
                    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Akses Kapan Saja dan di Mana Saja</span>
                        </li>
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Manajemen Data Terintegrasi</span>
                        </li>
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Notifikasi Real-Time</span>
                        </li>
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Dukungan Pelaporan Visual</span>
                        </li>
                        <li class="flex space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Skalabilitas untuk Berbagai Kebutuhan</span>
                        </li>
                    </ul>
                    <p class="font-light lg:text-xl">Gabungkan teknologi modern dan kemudahan manajemen dengan SIMAS. Pastikan setiap seminar yang Anda kelola berjalan lancar tanpa hambatan.</p>
                </div>
                <img class="w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={featureImg2} alt="feature image 2"/>
            </div>
           
        </div>
      </section>
    
  
    <section class="bg-white dark:bg-gray-900" id='testimoni'>
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div class="col-span-2 mb-8">
                <p class="text-lg font-medium text-purple-600 dark:text-purple-500">Testimoni</p>
                <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">SIMAS Telah Dipercaya oleh Banyak Pihak</h2>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Ratusan seminar sukses telah kami bantu kelola dengan teknologi yang andal dan layanan terbaik.</p>
                <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                  
                </div>
            </div>
            <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                    <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
                    <h3 class="mb-2 text-2xl font-bold dark:text-white">99% Kepuasan Pelanggan</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">Mayoritas pengguna kami merasa puas dengan fitur, layanan, dan kemudahan yang ditawarkan SIMAS.</p>
                </div>
                <div>
                    <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                    <h3 class="mb-2 text-2xl font-bold dark:text-white">200k+ Peserta</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">Lebih dari 200 ribu peserta telah menghadiri seminar yang dikelola melalui SIMAS, memastikan setiap acara berjalan lancar.</p>
                </div>
                <div>
                    <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                    <h3 class="mb-2 text-2xl font-bold dark:text-white">100+ Seminar Berhasil Dikelola</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">Mulai dari seminar pendidikan hingga konferensi bisnis berskala besar, SIMAS telah menjadi solusi utama bagi penyelenggara.</p>
                </div>
                <div>
                    <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    <h3 class="mb-2 text-2xl font-bold dark:text-white">50+ Institusi dan Perusahaan</h3>
                    <p class="font-light text-gray-500 dark:text-gray-400">"Berbagai institusi pendidikan, organisasi, dan perusahaan telah menggunakan SIMAS untuk menyelenggarakan acara mereka dengan mudah.</p>
                </div>
            </div>
        </div>
      </section>
    
  
    
  
    <section class="bg-white dark:bg-gray-900" id='price'>
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Harga Layanan SIMAS</h2>
                <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">SIMAS menawarkan paket Lifetime Access yang memungkinkan Anda menikmati semua fitur premium SIMAS dengan bayar sekali hanya Rp 50.000. Tidak ada biaya bulanan, tidak ada biaya tersembunyi cukup bayar sekali untuk mengelola seminar Anda dengan mudah dan efisien selamanya</p>
            </div>
            <div class="">
               

               
                <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">Lifetime</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Solusi Seminar Hemat dan Seumur Hidup</p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">Rp.50.000</span>
                        <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400>/selamanya</span>
                    </div>
                   
                    <ul role="list" class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Akses Selamanya,Nikmati semua fitur SIMAS tanpa batas waktu, kapan saja Anda butuhkan.</span>
                        </li>
                        <li class="flex items-center space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Tidak Perlu Pembaruan,Cukup bayar sekali dan nikmati akses tanpa perlu memperbarui paket atau berurusan dengan tagihan tahunan.</span>
                        </li>
                        <li class="flex items-center space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Kemudahan Pengelolaan,Dari pendaftaran peserta hingga laporan, semuanya dapat dilakukan dengan beberapa klik saja.</span>
                        </li>
                        <li class="flex items-center space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Layanan Support,Akses ke dukungan pelanggan untuk membantu Anda mengelola seminar kapan saja Anda membutuhkan bantuan.</span>
                        </li>
                        <li class="flex items-center space-x-3">
                           
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Selalu Mendapatkan Update Fitur</span>
                        </li>
                    </ul>
                    <a href="#" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Daftar Sekarang</a>
                </div>
               

            </div>
        </div>
      </section>
  
   
    <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div class="max-w-screen-md mx-auto text-center">
                <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Siap Mengelola Seminar Anda dengan SIMAS?</h2>
                <p class="mb-6 font-normal text-gray-500 dark:text-gray-400 md:text-lg">Jangan tunggu lebih lama lagi! Daftar sekarang dan nikmati kemudahan dalam mengelola seminar dengan SIMAS. Dengan harga terjangkau hanya Rp 50.000 untuk akses seumur hidup, Anda dapat menikmati berbagai fitur canggih yang akan mempermudah setiap tahap seminar Anda. Mulai dari pendaftaran peserta hingga laporan lengkap, SIMAS siap membantu Anda.</p>
                <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Gabung Sekarang dan Mulai Kelola Seminar Anda</a>
            </div>
        </div>
    </section>
</>
  );
};

export default SeminarInfo;
