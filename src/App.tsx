import React, { useState } from 'react';
import { Download, Plus, Trash2, Calendar, Plane, Hotel, DollarSign, FileText } from 'lucide-react';

interface FlightDetails {
  date: string;
  airline: string;
  airlineLogo: string;
  departureAirport: string;
  departureTime: string;
  arrivalAirport: string;
  arrivalTime: string;
  stopover: string;
}

interface HotelDetails {
  name: string;
  link: string;
  checkIn: string;
  checkOut: string;
  nights: string;
  roomType: string;
  services: string;
  imageUrl: string;
}

interface CarRentalDetails {
  enabled: boolean;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  returnLocation: string;
  carType: string;
  carImage: string;
}

interface FormData {
  clientName: string;
  destination: string;
  cities: string;
  travelDate: string;
  nights: string;
  persons: string;
  level: string;
  headerImage: string;
  outboundFlight: FlightDetails;
  returnFlight: FlightDetails;
  hotels: HotelDetails[];
  carRental: CarRentalDetails;
  totalCost: string;
  discount: string;
  discountNote: string;
  coordinator: string;
  coordinatorTitle: string;
  includes: string[];
  excludes: string[];
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    clientName: 'استاذة هند',
    destination: 'جورجيا',
    cities: 'تيبليسي – باكورياني - باتومي',
    travelDate: '22 - 28 نوفمبر 2025',
    nights: '6 ليالي',
    persons: 'شخصين',
    level: 'خاص',
    headerImage: 'https://sfile.chatglm.cn/images-ppt/5a9413eb21e0.jpg',
    
    // معلومات الطيران
    outboundFlight: {
      date: '22-11-2025',
      airline: 'الجزيرة',
      airlineLogo: 'https://sfile.chatglm.cn/images-ppt/5b756aaef20c.png',
      departureAirport: 'مطار جدة',
      departureTime: '11:10 صباحا',
      arrivalAirport: 'مطار تيبلسي',
      arrivalTime: '08:00 مساءا',
      stopover: '3 ساعات و15 دقيقة بالكويت'
    },
    returnFlight: {
      date: '28-11-2025',
      airline: 'الجزيرة',
      airlineLogo: 'https://sfile.chatglm.cn/images-ppt/5b756aaef20c.png',
      departureAirport: 'مطار تيبليسي',
      departureTime: '03:00 مساءا',
      arrivalAirport: 'مطار جدة',
      arrivalTime: '08:40 مساءا',
      stopover: 'ساعة و35 دقيقة بالكويت'
    },
    
    // الفنادق
    hotels: [
      {
        name: 'Horizont Tiblisi',
        link: 'https://www.booking.com/hotel/ge/horizont-tbilisi-city.html?aid',
        checkIn: '22-11-2025',
        checkOut: '24-11-2025',
        nights: 'ليلتين',
        roomType: 'غرفة ثنائية',
        services: 'تشمل الاقامة والضرائب كافة + الافطار',
        imageUrl: 'https://sfile.chatglm.cn/images-ppt/f06ec0da68b7.jpg'
      },
      {
        name: 'KOMOREBI BAKURIANI RESORT',
        link: 'https://www.booking.com/Share-NJhK3Wm',
        checkIn: '24-11-2025',
        checkOut: '25-11-2025',
        nights: 'ليلة',
        roomType: 'غرفة ثنائية',
        services: 'تشمل الاقامة والضرائب كافة + الافطار',
        imageUrl: 'https://sfile.chatglm.cn/images-ppt/387165a36d47.jpg'
      },
      {
        name: 'Hotel Black Sea',
        link: 'https://www.booking.com/hotel/ge/black-sea-batumi7.html?aid',
        checkIn: '25-11-2025',
        checkOut: '27-11-2025',
        nights: 'ليلتين',
        roomType: 'غرفة ثنائية باطلالة علي البحر',
        services: 'تشمل الاقامة والضرائب كافة + الافطار',
        imageUrl: 'https://sfile.chatglm.cn/images-ppt/e220010df4da.jpg'
      },
      {
        name: 'Horizont Tiblisi',
        link: 'https://www.booking.com/hotel/ge/horizont-tbilisi-city.html?aid',
        checkIn: '27-11-2025',
        checkOut: '28-11-2025',
        nights: 'ليلة',
        roomType: 'غرفة ثنائية',
        services: 'تشمل الاقامة والضرائب كافة + الافطار',
        imageUrl: 'https://sfile.chatglm.cn/images-ppt/f06ec0da68b7.jpg'
      }
    ],
    
    // استئجار سيارة خاصة
    carRental: {
      enabled: false,
      pickupDate: '',
      returnDate: '',
      pickupLocation: '',
      returnLocation: '',
      carType: '',
      carImage: ''
    },
    
    // التكلفة
    totalCost: '6,900 ريال',
    discount: 'مطبق خصم',
    discountNote: 'للتعامل الأول',
    coordinator: 'جمال',
    coordinatorTitle: 'استشاري قسم الحجوزات',
    
    // الباقة تشمل
    includes: [
      'الطيران الدولي وفقا للتاريخ المطلوب',
      'الاستقبال والتوديع والتنقلات بسيارة وسائق خاص',
      'جولات يوميا بسيارة وسائق خاص لمدة 8 ساعات',
      'التنقلات بين المدن بسيارة وسائق خاص',
      'متابع باللغة العربية عبر الواتساب طوال السفر',
      'حجوزات الفنادق لمدة 07 ايام في المدن المذكورة مع الافطار',
      'السعر شامل ضرائب القيمة المضافة والاقامة'
    ],
    
    // الباقة لا تشمل
    excludes: [
      'وجبات الغداء والعشاء',
      'تذاكر دخول الاماكن السياحه',
      'ضرائب السياحه ان وجدات'
    ]
  });

  const [activeTab, setActiveTab] = useState('basic');
  const [imagePreview, setImagePreview] = useState(formData.headerImage);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // التحقق من أن الملف صورة
      if (!file.type.startsWith('image/')) {
        alert('يرجى اختيار ملف صورة فقط');
        return;
      }

      // التحقق من حجم الملف (أقل من 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('حجم الصورة كبير جداً. يرجى اختيار صورة أقل من 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target?.result as string;
        setFormData(prev => ({ ...prev, headerImage: base64Image }));
        setImagePreview(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    const defaultImage = 'https://sfile.chatglm.cn/images-ppt/5a9413eb21e0.jpg';
    setFormData(prev => ({ ...prev, headerImage: defaultImage }));
    setImagePreview(defaultImage);
  };

  const updateNestedField = <T extends keyof FormData>(parent: T, field: keyof FormData[T], value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: { ...(prev[parent] as any), [field]: value }
    }));
  };

  const addHotel = () => {
    setFormData(prev => ({
      ...prev,
      hotels: [...prev.hotels, {
        name: '',
        link: '',
        checkIn: '',
        checkOut: '',
        nights: '',
        roomType: '',
        services: '',
        imageUrl: ''
      }]
    }));
  };

  const removeHotel = (index: number) => {
    setFormData(prev => ({
      ...prev,
      hotels: prev.hotels.filter((_, i) => i !== index)
    }));
  };

  const updateHotel = (index: number, field: keyof HotelDetails, value: any) => {
    setFormData(prev => ({
      ...prev,
      hotels: prev.hotels.map((hotel, i) => 
        i === index ? { ...hotel, [field]: value } : hotel
      )
    }));
  };

  const addInclude = () => {
    setFormData(prev => ({
      ...prev,
      includes: [...prev.includes, '']
    }));
  };

  const removeInclude = (index: number) => {
    setFormData(prev => ({
      ...prev,
      includes: prev.includes.filter((_, i) => i !== index)
    }));
  };

  const updateInclude = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      includes: prev.includes.map((item, i) => i === index ? value : item)
    }));
  };

  const addExclude = () => {
    setFormData(prev => ({
      ...prev,
      excludes: [...prev.excludes, '']
    }));
  };

  const removeExclude = (index: number) => {
    setFormData(prev => ({
      ...prev,
      excludes: prev.excludes.filter((_, i) => i !== index)
    }));
  };

  const updateExclude = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      excludes: prev.excludes.map((item, i) => i === index ? value : item)
    }));
  };

  const isCarRentalFilled = () => {
    const { enabled, pickupDate, returnDate, pickupLocation, returnLocation, carType } = formData.carRental;
    return enabled && pickupDate && returnDate && pickupLocation && returnLocation && carType;
  };

  const generateHTML = () => {
    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>برنامج خاص ل${formData.clientName} ل${formData.destination}</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Tajawal', sans-serif;
            background-color: #f5f7fa;
            color: #333;
            line-height: 1.6;
        }
        
        .poster-container {
            width: 720px;
            min-height: 1334px;
            margin: 0 auto;
            background: linear-gradient(135deg, #f8f5ff 0%, #f5f7fa 100%);
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .bg-shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.1;
            z-index: 0;
        }
        
        .shape-1 {
            width: 400px;
            height: 400px;
            background: linear-gradient(45deg, #6191fe, #8c71f3);
            top: -100px;
            left: -100px;
        }
        
        .shape-2 {
            width: 300px;
            height: 300px;
            background: linear-gradient(45deg, #8c71f3, #f38981);
            bottom: -50px;
            right: -50px;
        }
        
        .content {
            position: relative;
            z-index: 1;
            padding: 40px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            position: relative;
            height: 280px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .header-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }
        
        .header-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(97, 145, 254, 0.7), rgba(140, 113, 243, 0.4));
            z-index: 0;
        }
        
        .header-content {
            position: relative;
            z-index: 1;
            padding: 40px 20px;
            color: white;
            text-align: center;
        }
        
        .title {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .subtitle {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        
        .overview {
            background: white;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        .overview-title {
            font-size: 24px;
            font-weight: 700;
            color: #6191fe;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .overview-title .material-icons {
            margin-left: 10px;
            color: #6191fe;
        }
        
        .overview-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .overview-item {
            display: flex;
            align-items: center;
        }
        
        .overview-item .material-icons {
            margin-left: 10px;
            color: #8c71f3;
            font-size: 20px;
        }
        
        .section {
            background: white;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        .section-title {
            font-size: 24px;
            font-weight: 700;
            color: #6191fe;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .section-title .material-icons {
            margin-left: 10px;
            color: #6191fe;
        }
        
        .flight-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            background: #f8f5ff;
            border-radius: 12px;
            overflow: hidden;
        }
        
        .flight-table th {
            background: #6191fe;
            color: white;
            padding: 12px 15px;
            text-align: right;
            font-weight: 600;
        }
        
        .flight-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #f8f5ff;
            text-align: right;
        }
        
        .flight-table tr:last-child td {
            border-bottom: none;
        }
        
        .flight-table tr:nth-child(even) {
            background: #f5f7fa;
        }
        
        .flight-direction {
            font-weight: 600;
            color: #6191fe;
            display: flex;
            align-items: center;
        }
        
        .flight-direction .material-icons {
            margin-left: 8px;
            font-size: 20px;
        }
        
        .hotel-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            background: #f8f5ff;
            border-radius: 12px;
            overflow: hidden;
        }
        
        .hotel-table th {
            background: #6191fe;
            color: white;
            padding: 12px 15px;
            text-align: right;
            font-weight: 600;
        }
        
        .hotel-table td {
            padding: 15px;
            border-bottom: 1px solid #f8f5ff;
            text-align: right;
            vertical-align: middle;
        }
        
        .hotel-table tr:last-child td {
            border-bottom: none;
        }
        
        .hotel-table tr:nth-child(even) {
            background: #f5f7fa;
        }
        
        .hotel-name {
            font-size: 18px;
            font-weight: 600;
            color: #6191fe;
            margin-bottom: 5px;
        }
        
        .hotel-details {
            font-size: 14px;
        }
        
        .hotel-image {
            width: 120px;
            height: 90px;
            border-radius: 8px;
            object-fit: cover;
        }
        
        .cost-breakdown {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        
        .cost-item {
            text-align: center;
            padding: 15px;
            border-radius: 12px;
            background: #f8f5ff;
            flex: 1;
            margin: 0 5px;
        }
        
        .cost-value {
            font-size: 22px;
            font-weight: 700;
            color: #6191fe;
            margin-bottom: 5px;
        }
        
        .cost-label {
            font-size: 14px;
            color: #666;
        }
        
        .payment-methods {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }
        
        .payment-method {
            background: #f8f5ff;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 14px;
            color: #6191fe;
            display: flex;
            align-items: center;
        }
        
        .payment-method .material-icons {
            font-size: 16px;
            margin-left: 5px;
        }
        
        .bank-details {
            margin-top: 20px;
            background: #f8f5ff;
            border-radius: 12px;
            padding: 15px;
        }
        
        .bank-item {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px dashed #e0e0e0;
        }
        
        .bank-item:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }
        
        .bank-name {
            font-size: 18px;
            font-weight: 600;
            color: #6191fe;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        }
        
        .bank-name .material-icons {
            margin-left: 8px;
            color: #8c71f3;
        }
        
        .account-info {
            font-size: 14px;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
        }
        
        .account-info .material-icons {
            font-size: 16px;
            margin-left: 5px;
            color: #8c71f3;
        }
        
        .beneficiary {
            margin-top: 8px;
            padding: 8px 12px;
            background: rgba(97, 145, 254, 0.1);
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            color: #6191fe;
        }
        
        .terms {
            font-size: 14px;
            color: #666;
            margin-top: 15px;
            padding: 15px;
            background: #f8f5ff;
            border-radius: 12px;
        }
        
        .terms-item {
            margin-bottom: 8px;
            display: flex;
        }
        
        .terms-item:before {
            content: "•";
            margin-left: 5px;
            color: #8c71f3;
        }
        
        .footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            font-size: 14px;
            color: #666;
        }
        
        .highlight {
            background: linear-gradient(transparent 60%, rgba(243, 137, 129, 0.2) 40%);
            padding: 0 2px;
        }
        
        .grid-texture {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            z-index: 0;
        }
        
        .brand-section {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            background: white;
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        .brand-logo {
            height: 80px;
            margin-left: 20px;
        }
        
        .brand-info {
            flex: 1;
        }
        
        .brand-name {
            font-size: 28px;
            font-weight: 700;
            color: #6191fe;
            margin-bottom: 5px;
        }
        
        .brand-tagline {
            font-size: 18px;
            color: #f38981;
        }
        
        .flight-table .flight-icon {
            color: #f38981;
            margin-left: 5px;
        }
        
        .section-divider {
            display: flex;
            justify-content: center;
            margin: 30px 0;
        }
        
        .section-divider img {
            height: 60px;
            opacity: 0.8;
        }
        
        .includes-excludes {
            display: flex;
            gap: 20px;
            margin-top: 15px;
        }
        
        .includes, .excludes {
            flex: 1;
            background: #f8f5ff;
            border-radius: 12px;
            padding: 15px;
        }
        
        .includes-title, .excludes-title {
            font-size: 18px;
            font-weight: 600;
            color: #6191fe;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        
        .includes-title .material-icons, .excludes-title .material-icons {
            margin-left: 8px;
            font-size: 20px;
        }
        
        .includes-list, .excludes-list {
            list-style: none;
        }
        
        .includes-list li, .excludes-list li {
            margin-bottom: 8px;
            padding-right: 20px;
            position: relative;
            font-size: 14px;
        }
        
        .includes-list li:before {
            content: "✓";
            position: absolute;
            right: 0;
            color: #4caf50;
            font-weight: bold;
        }
        
        .excludes-list li:before {
            content: "✗";
            position: absolute;
            right: 0;
            color: #f44336;
            font-weight: bold;
        }
        
        .airline-logo {
            height: 30px;
            vertical-align: middle;
            margin-left: 8px;
        }
        
        @media print {
            body {
                background: white;
            }
            .poster-container {
                box-shadow: none;
            }
        }
    </style>
</head>
<body>
    <div class="poster-container">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="grid-texture"></div>
        
        <div class="content">
            <!-- Brand Section -->
            <div class="brand-section">
                <img src="https://z-cdn-media.chatglm.cn/files/25b78501-45f1-426e-ad8f-20b0a946a70e_pasted_image_1759241618713.png?auth_key=1790777630-7dfed01e625a42d2925124a4eed16209-0-c43c12c0cf0a7986d35ede5c427fb543" alt="Etlaala Travel & Tourism" class="brand-logo">
                <div class="brand-info">
                    <div class="brand-name">اطلالة للسفر والسياحة</div>
                    <div class="brand-tagline">Travel & Tourism</div>
                </div>
            </div>
            
            <!-- Header Section -->
            <div class="header">
                <img src="${formData.headerImage}" alt="Destination" class="header-bg">
                <div class="header-overlay"></div>
                <div class="header-content">
                    <h1 class="title">برنامج خاص ل${formData.clientName} ل${formData.destination}</h1>
                    <h2 class="subtitle">${formData.cities}</h2>
                </div>
            </div>
            
            <!-- Overview Section -->
            <div class="overview">
                <h3 class="overview-title">
                    <i class="material-icons">info</i>
                    نظرة عامة عن الرحلة
                </h3>
                <div class="overview-grid">
                    <div class="overview-item">
                        <i class="material-icons">flight_takeoff</i>
                        <span>تاريخ السفر: ${formData.travelDate}</span>
                    </div>
                    <div class="overview-item">
                        <i class="material-icons">hotel</i>
                        <span>عدد الليالي: ${formData.nights}</span>
                    </div>
                    <div class="overview-item">
                        <i class="material-icons">people</i>
                        <span>عدد الأفراد: ${formData.persons}</span>
                    </div>
                    <div class="overview-item">
                        <i class="material-icons">stars</i>
                        <span>المستوى: ${formData.level}</span>
                    </div>
                </div>
            </div>
            
            ${isCarRentalFilled() ? `
            <!-- Section Divider -->
            <div class="section-divider">
                <img src="https://z-cdn-media.chatglm.cn/files/3f0b9cd4-570e-4ebd-8aff-d14b29404d65_pasted_image_1759242842896.png?auth_key=1790778881-ff8d15077da24bdaa583c77bdfed7461-0-a6a4b77eb709f2fa9cfa5d2fb50cc028" alt="Section Divider">
            </div>
            
            <!-- Car Rental Section -->
            <div class="section">
                <h3 class="section-title">
                    <i class="material-icons">directions_car</i>
                    استئجار سيارة خاصة
                </h3>
                
                <div style="display: flex; gap: 30px; align-items: center;">
                    ${formData.carRental.carImage ? `
                    <div style="flex-shrink: 0;">
                        <img src="${formData.carRental.carImage}" alt="${formData.carRental.carType}" style="width: 250px; height: 180px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                    </div>
                    ` : ''}
                    <div style="flex: 1;">
                        <div style="background: #f8f5ff; border-radius: 12px; padding: 20px;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                                <div>
                                    <div style="font-weight: 600; color: #6191fe; margin-bottom: 5px; display: flex; align-items: center;">
                                        <i class="material-icons" style="font-size: 18px; margin-left: 5px;">event</i>
                                        تاريخ الاستلام
                                    </div>
                                    <div style="font-size: 15px;">${formData.carRental.pickupDate}</div>
                                </div>
                                <div>
                                    <div style="font-weight: 600; color: #6191fe; margin-bottom: 5px; display: flex; align-items: center;">
                                        <i class="material-icons" style="font-size: 18px; margin-left: 5px;">event</i>
                                        تاريخ التسليم
                                    </div>
                                    <div style="font-size: 15px;">${formData.carRental.returnDate}</div>
                                </div>
                            </div>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                                <div>
                                    <div style="font-weight: 600; color: #6191fe; margin-bottom: 5px; display: flex; align-items: center;">
                                        <i class="material-icons" style="font-size: 18px; margin-left: 5px;">location_on</i>
                                        مكان الاستلام
                                    </div>
                                    <div style="font-size: 15px;">${formData.carRental.pickupLocation}</div>
                                </div>
                                <div>
                                    <div style="font-weight: 600; color: #6191fe; margin-bottom: 5px; display: flex; align-items: center;">
                                        <i class="material-icons" style="font-size: 18px; margin-left: 5px;">location_on</i>
                                        مكان التسليم
                                    </div>
                                    <div style="font-size: 15px;">${formData.carRental.returnLocation}</div>
                                </div>
                            </div>
                            
                            <div style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                                <div style="font-weight: 600; color: #8c71f3; margin-bottom: 5px; display: flex; align-items: center; justify-content: center;">
                                    <i class="material-icons" style="font-size: 20px; margin-left: 5px;">directions_car</i>
                                    نوع السيارة
                                </div>
                                <div style="font-size: 18px; font-weight: 700; color: #6191fe;">${formData.carRental.carType}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ` : ''}
            
            <!-- Section Divider -->
            <div class="section-divider">
                <img src="https://z-cdn-media.chatglm.cn/files/3f0b9cd4-570e-4ebd-8aff-d14b29404d65_pasted_image_1759242842896.png?auth_key=1790778881-ff8d15077da24bdaa583c77bdfed7461-0-a6a4b77eb709f2fa9cfa5d2fb50cc028" alt="Section Divider">
            </div>
            
            <!-- Flight Information Section -->
            <div class="section">
                <h3 class="section-title">
                    <i class="material-icons">flight</i>
                    معلومات الطيران
                </h3>
                
                <table class="flight-table">
                    <thead>
                        <tr>
                            <th>معلومات الرحلة</th>
                            <th>شركة الطيران</th>
                            <th>مطار الاقلاع - الوقت</th>
                            <th>مطار الوصول - الوقت</th>
                            <th>مدة التوقف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="flight-direction">
                                    <i class="material-icons flight-icon">flight_takeoff</i>
                                    رحلة الذهاب
                                </div>
                                <div>${formData.outboundFlight.date}</div>
                            </td>
                            <td>
                                ${formData.outboundFlight.airline}
                                <img src="${formData.outboundFlight.airlineLogo}" alt="Airline" class="airline-logo">
                            </td>
                            <td>${formData.outboundFlight.departureAirport}<br>${formData.outboundFlight.departureTime}</td>
                            <td>${formData.outboundFlight.arrivalAirport}<br>${formData.outboundFlight.arrivalTime}</td>
                            <td>${formData.outboundFlight.stopover}</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flight-direction">
                                    <i class="material-icons flight-icon">flight_land</i>
                                    رحلة الإياب
                                </div>
                                <div>${formData.returnFlight.date}</div>
                            </td>
                            <td>
                                ${formData.returnFlight.airline}
                                <img src="${formData.returnFlight.airlineLogo}" alt="Airline" class="airline-logo">
                            </td>
                            <td>${formData.returnFlight.departureAirport}<br>${formData.returnFlight.departureTime}</td>
                            <td>${formData.returnFlight.arrivalAirport}<br>${formData.returnFlight.arrivalTime}</td>
                            <td>${formData.returnFlight.stopover}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="font-size: 14px; color: #666; margin-top: 10px;">
                    <i class="material-icons" style="font-size: 16px; color: #8c71f3; vertical-align: middle; margin-left: 5px;">info</i>
                    الرحلة تشمل الوزن و الأمتعة اليدوية و الضرائب كافة
                </div>
            </div>
            
            <!-- Section Divider -->
            <div class="section-divider">
                <img src="https://z-cdn-media.chatglm.cn/files/3f0b9cd4-570e-4ebd-8aff-d14b29404d65_pasted_image_1759242842896.png?auth_key=1790778881-ff8d15077da24bdaa583c77bdfed7461-0-a6a4b77eb709f2fa9cfa5d2fb50cc028" alt="Section Divider">
            </div>
            
            <!-- Hotel Accommodations Section -->
            <div class="section">
                <h3 class="section-title">
                    <i class="material-icons">hotel</i>
                    الإقامة الفندقية
                </h3>
                
                <table class="hotel-table">
                    <thead>
                        <tr>
                            <th>الفندق</th>
                            <th>الفترة</th>
                            <th>نوع الغرفة</th>
                            <th>الخدمات</th>
                            <th>الصورة</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${formData.hotels.map(hotel => `
                        <tr>
                            <td>
                                <div class="hotel-name">${hotel.name}</div>
                                <div class="hotel-details">
                                    <a href="${hotel.link}" target="_blank" style="color: #6191fe;">رابط مشاهدة الصور</a>
                                </div>
                            </td>
                            <td>${hotel.checkIn}<br>${hotel.checkOut}<br>(${hotel.nights})</td>
                            <td>${hotel.roomType}</td>
                            <td>${hotel.services}</td>
                            <td><img src="${hotel.imageUrl}" alt="${hotel.name}" class="hotel-image"></td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <!-- Section Divider -->
            <div class="section-divider">
                <img src="https://z-cdn-media.chatglm.cn/files/3f0b9cd4-570e-4ebd-8aff-d14b29404d65_pasted_image_1759242842896.png?auth_key=1790778881-ff8d15077da24bdaa583c77bdfed7461-0-a6a4b77eb709f2fa9cfa5d2fb50cc028" alt="Section Divider">
            </div>
            
            <!-- Package Includes/Excludes Section -->
            <div class="section">
                <h3 class="section-title">
                    <i class="material-icons">checklist</i>
                    الباقة تشمل/لا تشمل
                </h3>
                
                <div class="includes-excludes">
                    <div class="includes">
                        <div class="includes-title">
                            <i class="material-icons">check_circle</i>
                            الباقة تشمل
                        </div>
                        <ul class="includes-list">
                            ${formData.includes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="excludes">
                        <div class="excludes-title">
                            <i class="material-icons">cancel</i>
                            الباقة لا تشمل
                        </div>
                        <ul class="excludes-list">
                            ${formData.excludes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Section Divider -->
            <div class="section-divider">
                <img src="https://z-cdn-media.chatglm.cn/files/3f0b9cd4-570e-4ebd-8aff-d14b29404d65_pasted_image_1759242842896.png?auth_key=1790778881-ff8d15077da24bdaa583c77bdfed7461-0-a6a4b77eb709f2fa9cfa5d2fb50cc028" alt="Section Divider">
            </div>
            
            <!-- Cost Breakdown Section -->
            <div class="section">
                <h3 class="section-title">
                    <i class="material-icons">payments</i>
                    تفاصيل التكلفة
                </h3>
                
                <div class="cost-breakdown">
                    <div class="cost-item">
                        <div class="cost-value">${formData.totalCost}</div>
                        <div class="cost-label">إجمالي تكلفة العرض</div>
                    </div>
                    <div class="cost-item">
                        <div class="cost-value">${formData.discount}</div>
                        <div class="cost-label">${formData.discountNote}</div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 15px; font-size: 16px;">
                    منسق العرض: <span class="highlight">${formData.coordinator}</span>، ${formData.coordinatorTitle}
                </div>
                
                <div style="text-align: center; margin-top: 15px; font-size: 14px; color: #666;">
                    <i class="material-icons" style="font-size: 16px; color: #8c71f3; vertical-align: middle; margin-left: 5px;">info</i>
                    الامكانيات والاسعار غير ثابتين لحين تاكيد الحجز
                </div>
            </div>
            
            <!-- Section Divider -->
            <div class="section-divider">
                <img src="https://z-cdn-media.chatglm.cn/files/3f0b9cd4-570e-4ebd-8aff-d14b29404d65_pasted_image_1759242842896.png?auth_key=1790778881-ff8d15077da24bdaa583c77bdfed7461-0-a6a4b77eb709f2fa9cfa5d2fb50cc028" alt="Section Divider">
            </div>
            
            <!-- Payment Methods Section -->
            <div class="section">
                <h3 class="section-title">
                    <i class="material-icons">account_balance</i>
                    طرق الدفع
                </h3>
                
                <div>تتيح شركة اطلاله للسفر والسياحة إمكانية الدفع عن طريق:</div>
                
                <div class="payment-methods">
                    <div class="payment-method">
                        <i class="material-icons">account_balance</i>
                        بنك الراجحي
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">account_balance</i>
                        بنك ساب
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">account_balance</i>
                        البنك الأهلي السعودي
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">credit_card</i>
                        فيزا
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">credit_card</i>
                        ماستر كارد
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">credit_card</i>
                        أمريكان إكسبريس
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">credit_card</i>
                        مدى
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">payments</i>
                        سداد كاش
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">credit_card</i>
                        تابي
                    </div>
                    <div class="payment-method">
                        <i class="material-icons">credit_card</i>
                        تمارا
                    </div>
                </div>
                
                <div class="bank-details">
                    <div class="bank-item">
                        <div class="bank-name">
                            <i class="material-icons">account_balance</i>
                            بنك الراجحي
                        </div>
                        <div class="account-info">
                            <i class="material-icons">account_number</i>
                            رقم الحساب: 409608010911912
                        </div>
                        <div class="account-info">
                            <i class="material-icons">credit_card</i>
                            الآيبان: SA5780000409608010911912
                        </div>
                    </div>
                    
                    <div class="bank-item">
                        <div class="bank-name">
                            <i class="material-icons">account_balance</i>
                            بنك ساب
                        </div>
                        <div class="account-info">
                            <i class="material-icons">account_number</i>
                            رقم الحساب: 262335334001
                        </div>
                        <div class="account-info">
                            <i class="material-icons">credit_card</i>
                            الآيبان: SA7145000000262335334001
                        </div>
                    </div>
                    
                    <div class="bank-item">
                        <div class="bank-name">
                            <i class="material-icons">account_balance</i>
                            البنك الأهلي السعودي
                        </div>
                        <div class="account-info">
                            <i class="material-icons">account_number</i>
                            رقم الحساب: 86100001821204
                        </div>
                        <div class="account-info">
                            <i class="material-icons">credit_card</i>
                            الآيبان: SA9710000086100001821204
                        </div>
                        <div class="beneficiary">
                            <i class="material-icons">person</i>
                            اسم المستفيد: شركة إطلالة للسفر والسياحة شخص واحد
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Section Divider -->
            <div class="section-divider">
                <img src="https://z-cdn-media.chatglm.cn/files/3f0b9cd4-570e-4ebd-8aff-d14b29404d65_pasted_image_1759242842896.png?auth_key=1790778881-ff8d15077da24bdaa583c77bdfed7461-0-a6a4b77eb709f2fa9cfa5d2fb50cc028" alt="Section Divider">
            </div>
            
            <!-- Terms and Conditions Section -->
            <div class="section">
                <h3 class="section-title">
                    <i class="material-icons">gavel</i>
                    الشروط والأحكام
                </h3>
                
                <div class="terms">
                    <div class="terms-item">الحجز غير قابل للإلغاء أو التعديل (المبلغ بالكامل غير مسترد)</div>
                    <div class="terms-item">الشركة غير مسئولة عن تصاريح السفر بكافة أنواعها وتأشيرات الخروج والعودة</div>
                    <div class="terms-item">تاريخ إصدار وانتهاء وثائق السفر بكافة أنواعها تكون مسئولية المسافر</div>
                    <div class="terms-item">قد تتغير الأسعار والإمكانية، يحدد السعر النهائي وفقًا لتاريخ السفر المطلوب</div>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                شركة اطلاله للسفر والسياحة<br>
                <a href="https://etlaala.com/privacy-policy/" style="color: #6191fe;">https://etlaala.com/privacy-policy/</a>
            </div>
        </div>
    </div>
</body>
</html>`;
  };

  const downloadHTML = () => {
    const htmlContent = generateHTML();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `عرض-${formData.clientName}-${formData.destination}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleAirlineLogoUpload = (e: React.ChangeEvent<HTMLInputElement>, flightType: 'outboundFlight' | 'returnFlight') => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('يرجى اختيار ملف صورة فقط');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('حجم الصورة كبير جداً. يرجى اختيار صورة أقل من 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target?.result as string;
        setFormData(prev => ({
          ...prev,
          [flightType]: { ...prev[flightType], airlineLogo: base64Image }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHotelImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('يرجى اختيار ملف صورة فقط');
        return;
      }
      if (file.size > 3 * 1024 * 1024) {
        alert('حجم الصورة كبير جداً. يرجى اختيار صورة أقل من 3MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target?.result as string;
        updateHotel(index, 'imageUrl', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateCarRental = (field: keyof CarRentalDetails, value: any) => {
    setFormData(prev => ({
      ...prev,
      carRental: { ...prev.carRental, [field]: value }
    }));
  };

  const handleCarImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('يرجى اختيار ملف صورة فقط');
        return;
      }
      if (file.size > 3 * 1024 * 1024) {
        alert('حجم الصورة كبير جداً. يرجى اختيار صورة أقل من 3MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target?.result as string;
        updateCarRental('carImage', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleCarRental = () => {
    setFormData(prev => ({
      ...prev,
      carRental: { ...prev.carRental, enabled: !prev.carRental.enabled }
    }));
  };

  const generateAndOpen = () => {
    const htmlContent = generateHTML();
    
    // إنشاء Blob من المحتوى
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // فتح في نافذة جديدة
    const newWindow = window.open(url, '_blank');
    
    if (!newWindow) {
      // إذا فشل الفتح، نحاول تحميل الملف
      alert('تعذر فتح النافذة. سيتم تحميل الملف بدلاً من ذلك.');
      downloadHTML();
    }
    
    // تنظيف الـ URL بعد 100ms
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50" style={{ fontFamily: 'Tajawal, sans-serif' }} dir="rtl">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-blue-600 mb-2">مخصص عروض شركة اطلالة</h1>
              <p className="text-gray-600">شركة اطلالة للسفر والسياحة</p>
            </div>
            <button
              onClick={downloadHTML}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-lg font-bold"
            >
              <Download size={24} />
              تحميل العرض
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-6 py-3 font-semibold whitespace-nowrap ${activeTab === 'basic' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              <FileText className="inline ml-2" size={18} />
              المعلومات الأساسية
            </button>
            <button
              onClick={() => setActiveTab('flights')}
              className={`px-6 py-3 font-semibold whitespace-nowrap ${activeTab === 'flights' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              <Plane className="inline ml-2" size={18} />
              معلومات الطيران
            </button>
            <button
              onClick={() => setActiveTab('hotels')}
              className={`px-6 py-3 font-semibold whitespace-nowrap ${activeTab === 'hotels' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              <Hotel className="inline ml-2" size={18} />
              الفنادق
            </button>
            <button
              onClick={() => setActiveTab('car')}
              className={`px-6 py-3 font-semibold whitespace-nowrap ${activeTab === 'car' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              <Calendar className="inline ml-2" size={18} />
              استئجار سيارة
            </button>
            <button
              onClick={() => setActiveTab('package')}
              className={`px-6 py-3 font-semibold whitespace-nowrap ${activeTab === 'package' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              <DollarSign className="inline ml-2" size={18} />
              الباقة والتكلفة
            </button>
          </div>

          {/* Basic Information Tab */}
          {activeTab === 'basic' && (
            <div className="space-y-6">
              {/* Image Upload Section */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="text-lg font-bold text-purple-700 mb-4">📸 صورة العرض الرئيسية</h3>
                <div className="flex gap-6 items-start">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      اختر صورة لتظهر في رأس العرض (Header)
                    </label>
                    <div className="flex gap-3">
                      <label className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <Download size={20} />
                        رفع صورة جديدة
                      </label>
                      {formData.headerImage !== 'https://sfile.chatglm.cn/images-ppt/5a9413eb21e0.jpg' && (
                        <button
                          onClick={removeImage}
                          className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <Trash2 size={20} />
                          استخدام الصورة الافتراضية
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-3">
                      💡 يُفضل استخدام صورة بحجم 1200×600 بكسل أو أكبر<br/>
                      📏 الحد الأقصى: 5MB | الصيغ المقبولة: JPG, PNG, WebP
                    </p>
                  </div>
                  <div className="w-64">
                    <p className="text-sm font-semibold text-gray-700 mb-2">معاينة الصورة:</p>
                    <div className="border-4 border-purple-300 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">اسم العميل</label>
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) => updateField('clientName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الوجهة</label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => updateField('destination', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">المدن</label>
                <input
                  type="text"
                  value={formData.cities}
                  onChange={(e) => updateField('cities', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ السفر</label>
                  <input
                    type="text"
                    value={formData.travelDate}
                    onChange={(e) => updateField('travelDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">عدد الليالي</label>
                  <input
                    type="text"
                    value={formData.nights}
                    onChange={(e) => updateField('nights', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">عدد الأفراد</label>
                  <input
                    type="text"
                    value={formData.persons}
                    onChange={(e) => updateField('persons', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">المستوى</label>
                  <input
                    type="text"
                    value={formData.level}
                    onChange={(e) => updateField('level', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Flights Tab */}
          {activeTab === 'flights' && (
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">رحلة الذهاب</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">التاريخ</label>
                    <input
                      type="text"
                      value={formData.outboundFlight.date}
                      onChange={(e) => updateNestedField('outboundFlight', 'date', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">شركة الطيران</label>
                    <input
                      type="text"
                      value={formData.outboundFlight.airline}
                      onChange={(e) => updateNestedField('outboundFlight', 'airline', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  {/* صورة شركة الطيران */}
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">شعار شركة الطيران</label>
                    <div className="flex gap-4 items-center">
                      <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleAirlineLogoUpload(e, 'outboundFlight')}
                          className="hidden"
                        />
                        <Download size={18} />
                        رفع شعار الشركة
                      </label>
                      {formData.outboundFlight.airlineLogo && (
                        <div className="flex items-center gap-2">
                          <img 
                            src={formData.outboundFlight.airlineLogo} 
                            alt="Airline Logo" 
                            className="h-12 w-auto border border-gray-300 rounded bg-white p-1"
                          />
                          <span className="text-xs text-gray-600">✓ تم رفع الشعار</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">مطار الإقلاع</label>
                    <input
                      type="text"
                      value={formData.outboundFlight.departureAirport}
                      onChange={(e) => updateNestedField('outboundFlight', 'departureAirport', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">وقت الإقلاع</label>
                    <input
                      type="text"
                      value={formData.outboundFlight.departureTime}
                      onChange={(e) => updateNestedField('outboundFlight', 'departureTime', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">مطار الوصول</label>
                    <input
                      type="text"
                      value={formData.outboundFlight.arrivalAirport}
                      onChange={(e) => updateNestedField('outboundFlight', 'arrivalAirport', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">وقت الوصول</label>
                    <input
                      type="text"
                      value={formData.outboundFlight.arrivalTime}
                      onChange={(e) => updateNestedField('outboundFlight', 'arrivalTime', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">مدة التوقف</label>
                    <input
                      type="text"
                      value={formData.outboundFlight.stopover}
                      onChange={(e) => updateNestedField('outboundFlight', 'stopover', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-600 mb-4">رحلة العودة</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">التاريخ</label>
                    <input
                      type="text"
                      value={formData.returnFlight.date}
                      onChange={(e) => updateNestedField('returnFlight', 'date', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">شركة الطيران</label>
                    <input
                      type="text"
                      value={formData.returnFlight.airline}
                      onChange={(e) => updateNestedField('returnFlight', 'airline', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  {/* صورة شركة الطيران */}
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">شعار شركة الطيران</label>
                    <div className="flex gap-4 items-center">
                      <label className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer text-sm">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleAirlineLogoUpload(e, 'returnFlight')}
                          className="hidden"
                        />
                        <Download size={18} />
                        رفع شعار الشركة
                      </label>
                      {formData.returnFlight.airlineLogo && (
                        <div className="flex items-center gap-2">
                          <img 
                            src={formData.returnFlight.airlineLogo} 
                            alt="Airline Logo" 
                            className="h-12 w-auto border border-gray-300 rounded bg-white p-1"
                          />
                          <span className="text-xs text-gray-600">✓ تم رفع الشعار</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">مطار الإقلاع</label>
                    <input
                      type="text"
                      value={formData.returnFlight.departureAirport}
                      onChange={(e) => updateNestedField('returnFlight', 'departureAirport', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">وقت الإقلاع</label>
                    <input
                      type="text"
                      value={formData.returnFlight.departureTime}
                      onChange={(e) => updateNestedField('returnFlight', 'departureTime', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">مطار الوصول</label>
                    <input
                      type="text"
                      value={formData.returnFlight.arrivalAirport}
                      onChange={(e) => updateNestedField('returnFlight', 'arrivalAirport', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">وقت الوصول</label>
                    <input
                      type="text"
                      value={formData.returnFlight.arrivalTime}
                      onChange={(e) => updateNestedField('returnFlight', 'arrivalTime', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">مدة التوقف</label>
                    <input
                      type="text"
                      value={formData.returnFlight.stopover}
                      onChange={(e) => updateNestedField('returnFlight', 'stopover', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hotels Tab */}
          {activeTab === 'hotels' && (
            <div className="space-y-6">
              {formData.hotels.map((hotel, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
                  <button
                    onClick={() => removeHotel(index)}
                    className="absolute top-4 left-4 text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                  <h3 className="text-lg font-bold text-gray-700 mb-4">فندق {index + 1}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">اسم الفندق</label>
                      <input
                        type="text"
                        value={hotel.name}
                        onChange={(e) => updateHotel(index, 'name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">رابط الفندق</label>
                      <input
                        type="text"
                        value={hotel.link}
                        onChange={(e) => updateHotel(index, 'link', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ تسجيل الدخول</label>
                      <input
                        type="text"
                        value={hotel.checkIn}
                        onChange={(e) => updateHotel(index, 'checkIn', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ تسجيل الخروج</label>
                      <input
                        type="text"
                        value={hotel.checkOut}
                        onChange={(e) => updateHotel(index, 'checkOut', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">عدد الليالي</label>
                      <input
                        type="text"
                        value={hotel.nights}
                        onChange={(e) => updateHotel(index, 'nights', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">نوع الغرفة</label>
                      <input
                        type="text"
                        value={hotel.roomType}
                        onChange={(e) => updateHotel(index, 'roomType', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">الخدمات</label>
                      <input
                        type="text"
                        value={hotel.services}
                        onChange={(e) => updateHotel(index, 'services', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">صورة الفندق</label>
                      <div className="flex gap-4 items-start">
                        <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleHotelImageUpload(e, index)}
                            className="hidden"
                          />
                          <Download size={18} />
                          رفع صورة الفندق
                        </label>
                        {hotel.imageUrl && (
                          <div className="flex items-center gap-3">
                            <img 
                              src={hotel.imageUrl} 
                              alt={hotel.name} 
                              className="h-20 w-28 object-cover border border-gray-300 rounded"
                            />
                            <span className="text-xs text-gray-600">✓ تم رفع الصورة</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={addHotel}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus size={20} />
                إضافة فندق جديد
              </button>
            </div>
          )}

          {/* Car Rental Tab */}
          {activeTab === 'car' && (
            <div className="space-y-6">
              {/* Toggle Switch - Enhanced */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border-4 border-green-300 shadow-lg">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
                      🚗 استئجار سيارة خاصة
                    </h3>
                    <p className="text-gray-700 text-base font-medium">
                      فعّل هذا الخيار إذا كان العرض يتضمن استئجار سيارة خاصة
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.carRental.enabled}
                        onChange={toggleCarRental}
                        className="sr-only peer"
                      />
                      <div className="w-20 h-10 bg-green-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:right-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-green-600 shadow-lg"></div>
                    </label>
                    <span className={`text-sm font-bold px-4 py-1 rounded-full ${formData.carRental.enabled ? 'bg-green-600 text-white' : 'bg-green-300 text-green-800'}`}>
                      {formData.carRental.enabled ? '✓ مفعّل' : '✗ غير مفعّل'}
                    </span>
                  </div>
                </div>
              </div>

              {formData.carRental.enabled && (
                <>
                  {/* Car Image Upload */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-700 mb-4">📸 صورة السيارة</h3>
                    <div className="flex gap-6 items-start">
                      <div className="flex-1">
                        <label className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleCarImageUpload}
                            className="hidden"
                          />
                          <Download size={20} />
                          رفع صورة السيارة
                        </label>
                        <p className="text-xs text-gray-600 mt-3">
                          💡 يُفضل استخدام صورة واضحة للسيارة<br/>
                          📏 الحد الأقصى: 3MB
                        </p>
                      </div>
                      {formData.carRental.carImage && (
                        <div className="w-64">
                          <p className="text-sm font-semibold text-gray-700 mb-2">معاينة:</p>
                          <div className="border-4 border-blue-300 rounded-lg overflow-hidden shadow-lg">
                            <img 
                              src={formData.carRental.carImage} 
                              alt="Car Preview" 
                              className="w-full h-40 object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Car Rental Details */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-700 mb-4">تفاصيل الاستئجار</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ الاستلام</label>
                        <input
                          type="text"
                          value={formData.carRental.pickupDate}
                          onChange={(e) => updateCarRental('pickupDate', e.target.value)}
                          placeholder="مثال: 22-11-2025"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ التسليم</label>
                        <input
                          type="text"
                          value={formData.carRental.returnDate}
                          onChange={(e) => updateCarRental('returnDate', e.target.value)}
                          placeholder="مثال: 28-11-2025"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">مكان الاستلام</label>
                        <input
                          type="text"
                          value={formData.carRental.pickupLocation}
                          onChange={(e) => updateCarRental('pickupLocation', e.target.value)}
                          placeholder="مثال: مطار تيبليسي الدولي"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">مكان التسليم</label>
                        <input
                          type="text"
                          value={formData.carRental.returnLocation}
                          onChange={(e) => updateCarRental('returnLocation', e.target.value)}
                          placeholder="مثال: مطار تيبليسي الدولي"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">نوع السيارة</label>
                        <input
                          type="text"
                          value={formData.carRental.carType}
                          onChange={(e) => updateCarRental('carType', e.target.value)}
                          placeholder="مثال: تويوتا كامري 2024 أو مرسيدس S-Class"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preview Status */}
                  <div className={`p-4 rounded-lg border-2 ${isCarRentalFilled() ? 'bg-green-50 border-green-300' : 'bg-yellow-50 border-yellow-300'}`}>
                    <div className="flex items-center gap-2">
                      {isCarRentalFilled() ? (
                        <>
                          <span className="text-green-600 text-xl">✓</span>
                          <span className="text-green-800 font-semibold">
                            تم ملء جميع البيانات - سيظهر قسم استئجار السيارة في العرض النهائي
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-yellow-600 text-xl">⚠</span>
                          <span className="text-yellow-800 font-semibold">
                            يرجى ملء جميع الحقول لإظهار قسم استئجار السيارة في العرض النهائي
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}

              {!formData.carRental.enabled && (
                <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
                  <Calendar size={80} className="mx-auto mb-6 text-gray-400" />
                  <p className="text-2xl font-bold text-gray-600 mb-3">قسم استئجار السيارة غير مفعّل</p>
                  <p className="text-lg text-gray-500 mb-6">
                    قم بتفعيل الزر في الأعلى ☝️ لإضافة تفاصيل استئجار السيارة
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-800 rounded-lg font-semibold">
                    <span className="text-2xl">⬆️</span>
                    <span>اضغط على الزر الأخضر في الأعلى للتفعيل</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Package Tab */}
          {activeTab === 'package' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">التكلفة الإجمالية</label>
                  <input
                    type="text"
                    value={formData.totalCost}
                    onChange={(e) => updateField('totalCost', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الخصم</label>
                  <input
                    type="text"
                    value={formData.discount}
                    onChange={(e) => updateField('discount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ملاحظة الخصم</label>
                  <input
                    type="text"
                    value={formData.discountNote}
                    onChange={(e) => updateField('discountNote', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">منسق العرض</label>
                  <input
                    type="text"
                    value={formData.coordinator}
                    onChange={(e) => updateField('coordinator', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">المسمى الوظيفي للمنسق</label>
                <input
                    type="text"
                    value={formData.coordinatorTitle}
                    onChange={(e) => updateField('coordinatorTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-600">الباقة تشمل</h3>
                  <button
                    onClick={addInclude}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Plus size={18} />
                    إضافة
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.includes.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateInclude(index, e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                      />
                      <button
                        onClick={() => removeInclude(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-red-600">الباقة لا تشمل</h3>
                  <button
                    onClick={addExclude}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <Plus size={18} />
                    إضافة
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.excludes.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateExclude(index, e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                      />
                      <button
                        onClick={() => removeExclude(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-800 mb-3">💡 كيفية حفظ العرض كملف PDF:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-900">
            <li>اضغط على زر "توليد العرض وفتحه" في الأعلى</li>
            <li>سيتم فتح العرض في نافذة جديدة</li>
            <li>اضغط <strong>Ctrl+P</strong> (Windows) أو <strong>Cmd+P</strong> (Mac)</li>
            <li>اختر "Save as PDF" أو "حفظ كـ PDF" من خيارات الطابعة</li>
            <li>اضغط "حفظ" واختر مكان الحفظ</li>
          </ol>
          <p className="mt-4 text-sm text-blue-700">✨ ستظهر جميع الصور والتصميم بشكل مثالي في النافذة الجديدة!</p>
        </div>
      </div>
    </div>
  );
}