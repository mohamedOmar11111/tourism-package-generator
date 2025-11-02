import React, { useState } from 'react';
import { Download, Plus, Trash2, Calendar, Plane, Hotel, DollarSign, FileText } from 'lucide-react';

export default function TourismPackageGenerator() {
  const [formData, setFormData] = useState({
    clientName: 'استاذة هند',
    destination: 'جورجيا',
    cities: 'تيبليسي – باكورياني - باتومي',
    travelDate: '22 - 28 نوفمبر 2025',
    nights: '6 ليالي',
    persons: 'شخصين',
    level: 'خاص',
    headerImage: 'https://sfile.chatglm.cn/images-ppt/5a9413eb21e0.jpg',
    
    outboundFlights: [
      {
        id: 1,
        date: '22-11-2025',
        airline: 'الجزيرة',
        airlineLogo: 'https://sfile.chatglm.cn/images-ppt/5b756aaef20c.png',
        departureAirport: 'مطار جدة',
        departureTime: '11:10 صباحا',
        arrivalAirport: 'مطار تيبلسي',
        arrivalTime: '08:00 مساءا',
        stopover: '3 ساعات و15 دقيقة بالكويت'
      }
    ],
    returnFlights: [
      {
        id: 1,
        date: '28-11-2025',
        airline: 'الجزيرة',
        airlineLogo: 'https://sfile.chatglm.cn/images-ppt/5b756aaef20c.png',
        departureAirport: 'مطار تيبليسي',
        departureTime: '03:00 مساءا',
        arrivalAirport: 'مطار جدة',
        arrivalTime: '08:40 مساءا',
        stopover: 'ساعة و35 دقيقة بالكويت'
      }
    ],
    
    hotels: [
      {
        id: 1,
        name: 'Horizont Tiblisi',
        link: 'https://www.booking.com/hotel/ge/horizont-tbilisi-city.html?aid',
        checkIn: '22-11-2025',
        checkOut: '24-11-2025',
        nights: 'ليلتين',
        roomType: 'غرفة ثنائية',
        services: 'تشمل الاقامة والضرائب كافة + الافطار',
        imageUrl: 'https://sfile.chatglm.cn/images-ppt/f06ec0da68b7.jpg'
      }
    ],
    
    carRental: {
      enabled: false,
      pickupDate: '',
      returnDate: '',
      pickupLocation: '',
      returnLocation: '',
      carType: '',
      carImage: ''
    },
    
    totalCost: '6,900 ريال',
    discount: 'مطبق خصم',
    discountNote: 'للتعامل الأول',
    coordinator: 'جمال',
    coordinatorTitle: 'استشاري قسم الحجوزات',
    
    includes: [
      'الطيران الدولي وفقا للتاريخ المطلوب',
      'الاستقبال والتوديع والتنقلات بسيارة وسائق خاص',
      'جولات يوميا بسيارة وسائق خاص لمدة 8 ساعات',
      'التنقلات بين المدن بسيارة وسائق خاص',
      'متابع باللغة العربية عبر الواتساب طوال السفر',
      'حجوزات الفنادق لمدة 07 ايام في المدن المذكورة مع الافطار',
      'السعر شامل ضرائب القيمة المضافة والاقامة'
    ],
    
    excludes: [
      'وجبات الغداء والعشاء',
      'تذاكر دخول الاماكن السياحه',
      'ضرائب السياحه ان وجدات'
    ]
  });

  const [activeTab, setActiveTab] = useState('basic');
  const [imagePreview, setImagePreview] = useState('https://sfile.chatglm.cn/images-ppt/5a9413eb21e0.jpg');

  // Basic field update
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Header image handling
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('يرجى اختيار ملف صورة فقط');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('حجم الصورة كبير جداً. يرجى اختيار صورة أقل من 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
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

  // Outbound flights management
  const addOutboundFlight = () => {
    const newFlight = {
      id: Date.now(),
      date: '',
      airline: '',
      airlineLogo: 'https://sfile.chatglm.cn/images-ppt/5b756aaef20c.png',
      departureAirport: '',
      departureTime: '',
      arrivalAirport: '',
      arrivalTime: '',
      stopover: ''
    };
    setFormData(prev => ({
      ...prev,
      outboundFlights: [...prev.outboundFlights, newFlight]
    }));
  };

  const removeOutboundFlight = (id) => {
    if (formData.outboundFlights.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      outboundFlights: prev.outboundFlights.filter(f => f.id !== id)
    }));
  };

  const updateOutboundFlight = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      outboundFlights: prev.outboundFlights.map(flight =>
        flight.id === id ? { ...flight, [field]: value } : flight
      )
    }));
  };

  const handleOutboundLogoUpload = (e, flightId) => {
    const file = e.target.files[0];
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
        updateOutboundFlight(flightId, 'airlineLogo', event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Return flights management
  const addReturnFlight = () => {
    const newFlight = {
      id: Date.now(),
      date: '',
      airline: '',
      airlineLogo: 'https://sfile.chatglm.cn/images-ppt/5b756aaef20c.png',
      departureAirport: '',
      departureTime: '',
      arrivalAirport: '',
      arrivalTime: '',
      stopover: ''
    };
    setFormData(prev => ({
      ...prev,
      returnFlights: [...prev.returnFlights, newFlight]
    }));
  };

  const removeReturnFlight = (id) => {
    if (formData.returnFlights.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      returnFlights: prev.returnFlights.filter(f => f.id !== id)
    }));
  };

  const updateReturnFlight = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      returnFlights: prev.returnFlights.map(flight =>
        flight.id === id ? { ...flight, [field]: value } : flight
      )
    }));
  };

  const handleReturnLogoUpload = (e, flightId) => {
    const file = e.target.files[0];
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
        updateReturnFlight(flightId, 'airlineLogo', event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Hotels management
  const addHotel = () => {
    const newHotel = {
      id: Date.now(),
      name: '',
      link: '',
      checkIn: '',
      checkOut: '',
      nights: '',
      roomType: '',
      services: '',
      imageUrl: ''
    };
    setFormData(prev => ({
      ...prev,
      hotels: [...prev.hotels, newHotel]
    }));
  };

  const removeHotel = (id) => {
    setFormData(prev => ({
      ...prev,
      hotels: prev.hotels.filter(h => h.id !== id)
    }));
  };

  const updateHotel = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      hotels: prev.hotels.map(hotel =>
        hotel.id === id ? { ...hotel, [field]: value } : hotel
      )
    }));
  };

  const handleHotelImageUpload = (e, hotelId) => {
    const file = e.target.files[0];
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
        updateHotel(hotelId, 'imageUrl', event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Car rental management
  const updateCarRental = (field, value) => {
    setFormData(prev => ({
      ...prev,
      carRental: { ...prev.carRental, [field]: value }
    }));
  };

  const handleCarImageUpload = (e) => {
    const file = e.target.files[0];
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
        updateCarRental('carImage', event.target.result);
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

  const isCarRentalFilled = () => {
    const { pickupDate, returnDate, pickupLocation, returnLocation, carType } = formData.carRental;
    return pickupDate && returnDate && pickupLocation && returnLocation && carType;
  };

  // Includes/Excludes management
  const addInclude = () => {
    setFormData(prev => ({
      ...prev,
      includes: [...prev.includes, '']
    }));
  };

  const removeInclude = (index) => {
    setFormData(prev => ({
      ...prev,
      includes: prev.includes.filter((_, i) => i !== index)
    }));
  };

  const updateInclude = (index, value) => {
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

  const removeExclude = (index) => {
    setFormData(prev => ({
      ...prev,
      excludes: prev.excludes.filter((_, i) => i !== index)
    }));
  };

  const updateExclude = (index, value) => {
    setFormData(prev => ({
      ...prev,
      excludes: prev.excludes.map((item, i) => i === index ? value : item)
    }));
  };

  // Generate HTML function
  const generateHTML = () => {
    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>برنامج خاص ل${formData.clientName} ل${formData.destination}</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Tajawal', sans-serif; background-color: #f5f7fa; color: #333; line-height: 1.6; }
        .poster-container { width: 720px; min-height: 1334px; margin: 0 auto; background: linear-gradient(135deg, #f8f5ff 0%, #f5f7fa 100%); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); }
        .bg-shape { position: absolute; border-radius: 50%; opacity: 0.1; z-index: 0; }
        .shape-1 { width: 400px; height: 400px; background: linear-gradient(45deg, #6191fe, #8c71f3); top: -100px; left: -100px; }
        .shape-2 { width: 300px; height: 300px; background: linear-gradient(45deg, #8c71f3, #f38981); bottom: -50px; right: -50px; }
        .content { position: relative; z-index: 1; padding: 40px; }
        .header { text-align: center; margin-bottom: 30px; position: relative; height: 280px; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); }
        .header-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1; }
        .header-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(97, 145, 254, 0.7), rgba(140, 113, 243, 0.4)); z-index: 0; }
        .header-content { position: relative; z-index: 1; padding: 40px 20px; color: white; text-align: center; }
        .title { font-size: 36px; font-weight: 700; margin-bottom: 10px; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); }
        .subtitle { font-size: 22px; font-weight: 500; margin-bottom: 15px; }
        .section { background: white; border-radius: 16px; padding: 25px; margin-bottom: 30px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); }
        .section-title { font-size: 24px; font-weight: 700; color: #6191fe; margin-bottom: 15px; display: flex; align-items: center; }
        .section-title .material-icons { margin-left: 10px; color: #6191fe; }
        .flight-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; background: #f8f5ff; border-radius: 12px; overflow: hidden; }
        .flight-table th { background: #6191fe; color: white; padding: 12px 15px; text-align: right; font-weight: 600; }
        .flight-table td { padding: 12px 15px; border-bottom: 1px solid #f8f5ff; text-align: right; }
        .flight-direction { font-weight: 600; color: #6191fe; display: flex; align-items: center; }
        .airline-logo { height: 30px; vertical-align: middle; margin-left: 8px; }
        .hotel-table { width: 100%; border-collapse: collapse; }
        .hotel-table th { background: #6191fe; color: white; padding: 12px 15px; text-align: right; }
        .hotel-table td { padding: 15px; border-bottom: 1px solid #f8f5ff; text-align: right; vertical-align: middle; }
        .hotel-name { font-size: 18px; font-weight: 600; color: #6191fe; margin-bottom: 5px; }
        .hotel-image { width: 120px; height: 90px; border-radius: 8px; object-fit: cover; }
        .includes-excludes { display: flex; gap: 20px; margin-top: 15px; }
        .includes, .excludes { flex: 1; background: #f8f5ff; border-radius: 12px; padding: 15px; }
        .includes-title, .excludes-title { font-size: 18px; font-weight: 600; color: #6191fe; margin-bottom: 10px; display: flex; align-items: center; }
        .includes-list, .excludes-list { list-style: none; }
        .includes-list li, .excludes-list li { margin-bottom: 8px; padding-right: 20px; position: relative; font-size: 14px; }
        .includes-list li:before { content: "✓"; position: absolute; right: 0; color: #4caf50; font-weight: bold; }
        .excludes-list li:before { content: "✗"; position: absolute; right: 0; color: #f44336; font-weight: bold; }
        .brand-section { display: flex; align-items: center; justify-content: center; margin-bottom: 30px; background: white; border-radius: 16px; padding: 20px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); }
        .brand-logo { height: 80px; margin-left: 20px; }
        .brand-name { font-size: 28px; font-weight: 700; color: #6191fe; margin-bottom: 5px; }
        .brand-tagline { font-size: 18px; color: #f38981; }
        .cost-breakdown { display: flex; justify-content: space-between; margin-bottom: 15px; }
        .cost-item { text-align: center; padding: 15px; border-radius: 12px; background: #f8f5ff; flex: 1; margin: 0 5px; }
        .cost-value { font-size: 22px; font-weight: 700; color: #6191fe; margin-bottom: 5px; }
    </style>
</head>
<body>
    <div class="poster-container">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="content">
            <div class="brand-section">
                <img src="https://z-cdn-media.chatglm.cn/files/25b78501-45f1-426e-ad8f-20b0a946a70e_pasted_image_1759241618713.png?auth_key=1790777630-7dfed01e625a42d2925124a4eed16209-0-c43c12c0cf0a7986d35ede5c427fb543" class="brand-logo">
                <div>
                    <div class="brand-name">اطلالة للسفر والسياحة</div>
                    <div class="brand-tagline">Travel & Tourism</div>
                </div>
            </div>
            
            <div class="header">
                <img src="${formData.headerImage}" class="header-bg">
                <div class="header-overlay"></div>
                <div class="header-content">
                    <h1 class="title">برنامج خاص ل${formData.clientName} ل${formData.destination}</h1>
                    <h2 class="subtitle">${formData.cities}</h2>
                </div>
            </div>
            
            <div class="section">
                <h3 class="section-title"><i class="material-icons">flight</i> معلومات الطيران</h3>
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
                        ${formData.outboundFlights.map(flight => `
                        <tr>
                            <td><div class="flight-direction"><i class="material-icons">flight_takeoff</i> رحلة الذهاب</div><div>${flight.date}</div></td>
                            <td>${flight.airline}<br><img src="${flight.airlineLogo}" class="airline-logo"></td>
                            <td>${flight.departureAirport}<br>${flight.departureTime}</td>
                            <td>${flight.arrivalAirport}<br>${flight.arrivalTime}</td>
                            <td>${flight.stopover}</td>
                        </tr>
                        `).join('')}
                        ${formData.returnFlights.map(flight => `
                        <tr>
                            <td><div class="flight-direction"><i class="material-icons">flight_land</i> رحلة الإياب</div><div>${flight.date}</div></td>
                            <td>${flight.airline}<br><img src="${flight.airlineLogo}" class="airline-logo"></td>
                            <td>${flight.departureAirport}<br>${flight.departureTime}</td>
                            <td>${flight.arrivalAirport}<br>${flight.arrivalTime}</td>
                            <td>${flight.stopover}</td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="section">
                <h3 class="section-title"><i class="material-icons">hotel</i> الإقامة الفندقية</h3>
                <table class="hotel-table">
                    <thead>
                        <tr><th>الفندق</th><th>الفترة</th><th>نوع الغرفة</th><th>الخدمات</th><th>الصورة</th></tr>
                    </thead>
                    <tbody>
                        ${formData.hotels.map(hotel => `
                        <tr>
                            <td><div class="hotel-name">${hotel.name}</div></td>
                            <td>${hotel.checkIn}<br>${hotel.checkOut}<br>(${hotel.nights})</td>
                            <td>${hotel.roomType}</td>
                            <td>${hotel.services}</td>
                            <td><img src="${hotel.imageUrl}" class="hotel-image"></td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            ${formData.carRental.enabled && isCarRentalFilled() ? `
            <div class="section">
                <h3 class="section-title"><i class="material-icons">directions_car</i> استئجار سيارة خاصة</h3>
                <div style="display: flex; gap: 30px;">
                    ${formData.carRental.carImage ? `<img src="${formData.carRental.carImage}" style="width: 250px; height: 180px; object-fit: cover; border-radius: 12px;">` : ''}
                    <div style="flex: 1; background: #f8f5ff; border-radius: 12px; padding: 20px;">
                        <div><strong>تاريخ الاستلام:</strong> ${formData.carRental.pickupDate}</div>
                        <div><strong>تاريخ التسليم:</strong> ${formData.carRental.returnDate}</div>
                        <div><strong>مكان الاستلام:</strong> ${formData.carRental.pickupLocation}</div>
                        <div><strong>مكان التسليم:</strong> ${formData.carRental.returnLocation}</div>
                        <div><strong>نوع السيارة:</strong> ${formData.carRental.carType}</div>
                    </div>
                </div>
            </div>
            ` : ''}
            
            <div class="section">
                <h3 class="section-title"><i class="material-icons">checklist</i> الباقة تشمل/لا تشمل</h3>
                <div class="includes-excludes">
                    <div class="includes">
                        <div class="includes-title"><i class="material-icons">check_circle</i> الباقة تشمل</div>
                        <ul class="includes-list">${formData.includes.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                    <div class="excludes">
                        <div class="excludes-title"><i class="material-icons">cancel</i> الباقة لا تشمل</div>
                        <ul class="excludes-list">${formData.excludes.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h3 class="section-title"><i class="material-icons">payments</i> تفاصيل التكلفة</h3>
                <div class="cost-breakdown">
                    <div class="cost-item"><div class="cost-value">${formData.totalCost}</div><div>إجمالي تكلفة العرض</div></div>
                    <div class="cost-item"><div class="cost-value">${formData.discount}</div><div>${formData.discountNote}</div></div>
                </div>
                <div style="text-align: center; margin-top: 15px;">منسق العرض: ${formData.coordinator}، ${formData.coordinatorTitle}</div>
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
            {[
              { id: 'basic', icon: FileText, label: 'المعلومات الأساسية' },
              { id: 'flights', icon: Plane, label: 'معلومات الطيران' },
              { id: 'hotels', icon: Hotel, label: 'الفنادق' },
              { id: 'car', icon: Calendar, label: 'استئجار سيارة' },
              { id: 'package', icon: DollarSign, label: 'الباقة والتكلفة' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold whitespace-nowrap ${
                  activeTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
              >
                <tab.icon className="inline ml-2" size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab: Basic Info */}
          {activeTab === 'basic' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="text-lg font-bold text-purple-700 mb-4">📸 صورة العرض الرئيسية</h3>
                <div className="flex gap-6 items-start">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      اختر صورة لتظهر في رأس العرض (Header)
                    </label>
                    <div className="flex gap-3">
                      <label className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                        <Download size={20} />
                        رفع صورة جديدة
                      </label>
                      {formData.headerImage !== 'https://sfile.chatglm.cn/images-ppt/5a9413eb21e0.jpg' && (
                        <button onClick={removeImage} className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                          <Trash2 size={20} />
                          استخدام الصورة الافتراضية
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="w-64">
                    <p className="text-sm font-semibold text-gray-700 mb-2">معاينة الصورة:</p>
                    <div className="border-4 border-purple-300 rounded-lg overflow-hidden shadow-lg">
                      <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">اسم العميل</label><input type="text" value={formData.clientName} onChange={(e) => updateField('clientName', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">الوجهة</label><input type="text" value={formData.destination} onChange={(e) => updateField('destination', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
              </div>

              <div><label className="block text-sm font-semibold text-gray-700 mb-2">المدن</label><input type="text" value={formData.cities} onChange={(e) => updateField('cities', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>

              <div className="grid grid-cols-2 gap-6">
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ السفر</label><input type="text" value={formData.travelDate} onChange={(e) => updateField('travelDate', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">عدد الليالي</label><input type="text" value={formData.nights} onChange={(e) => updateField('nights', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">عدد الأفراد</label><input type="text" value={formData.persons} onChange={(e) => updateField('persons', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">المستوى</label><input type="text" value={formData.level} onChange={(e) => updateField('level', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
              </div>
            </div>
          )}

          {/* Tab: Flights */}
          {activeTab === 'flights' && (
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-blue-600">✈️ رحلات الذهاب</h3>
                  <button onClick={addOutboundFlight} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={18} />
                    إضافة رحلة ذهاب
                  </button>
                </div>

                {formData.outboundFlights.map((flight, index) => (
                  <div key={flight.id} className="bg-blue-50 p-6 rounded-lg mb-6 relative">
                    {formData.outboundFlights.length > 1 && (
                      <button onClick={() => removeOutboundFlight(flight.id)} className="absolute top-4 left-4 text-red-600 hover:text-red-800">
                        <Trash2 size={20} />
                      </button>
                    )}
                    
                    <h4 className="text-lg font-bold text-blue-600 mb-4">رحلة الذهاب {index + 1}</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">التاريخ</label><input type="text" value={flight.date} onChange={(e) => updateOutboundFlight(flight.id, 'date', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">شركة الطيران</label><input type="text" value={flight.airline} onChange={(e) => updateOutboundFlight(flight.id, 'airline', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">شعار شركة الطيران</label>
                      <div className="flex gap-4 items-center">
                        <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer text-sm">
                          <input type="file" accept="image/*" onChange={(e) => handleOutboundLogoUpload(e, flight.id)} className="hidden" />
                          <Download size={18} />
                          رفع شعار الشركة
                        </label>
                        {flight.airlineLogo && (
                          <div className="flex items-center gap-2">
                            <img src={flight.airlineLogo} alt="Logo" className="h-12 w-auto border border-gray-300 rounded bg-white p-1" />
                            <span className="text-xs text-gray-600">✓ تم رفع الشعار</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">مطار الإقلاع</label><input type="text" value={flight.departureAirport} onChange={(e) => updateOutboundFlight(flight.id, 'departureAirport', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">وقت الإقلاع</label><input type="text" value={flight.departureTime} onChange={(e) => updateOutboundFlight(flight.id, 'departureTime', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">مطار الوصول</label><input type="text" value={flight.arrivalAirport} onChange={(e) => updateOutboundFlight(flight.id, 'arrivalAirport', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">وقت الوصول</label><input type="text" value={flight.arrivalTime} onChange={(e) => updateOutboundFlight(flight.id, 'arrivalTime', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    </div>

                    <div className="mt-4"><label className="block text-sm font-semibold text-gray-700 mb-2">مدة التوقف</label><input type="text" value={flight.stopover} onChange={(e) => updateOutboundFlight(flight.id, 'stopover', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                  </div>
                ))}
              </div>

              <hr className="my-8 border-2 border-gray-200" />

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-purple-600">✈️ رحلات العودة</h3>
                  <button onClick={addReturnFlight} className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    <Plus size={18} />
                    إضافة رحلة عودة
                  </button>
                </div>

                {formData.returnFlights.map((flight, index) => (
                  <div key={flight.id} className="bg-purple-50 p-6 rounded-lg mb-6 relative">
                    {formData.returnFlights.length > 1 && (
                      <button onClick={() => removeReturnFlight(flight.id)} className="absolute top-4 left-4 text-red-600 hover:text-red-800">
                        <Trash2 size={20} />
                      </button>
                    )}
                    
                    <h4 className="text-lg font-bold text-purple-600 mb-4">رحلة العودة {index + 1}</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">التاريخ</label><input type="text" value={flight.date} onChange={(e) => updateReturnFlight(flight.id, 'date', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">شركة الطيران</label><input type="text" value={flight.airline} onChange={(e) => updateReturnFlight(flight.id, 'airline', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">شعار شركة الطيران</label>
                      <div className="flex gap-4 items-center">
                        <label className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer text-sm">
                          <input type="file" accept="image/*" onChange={(e) => handleReturnLogoUpload(e, flight.id)} className="hidden" />
                          <Download size={18} />
                          رفع شعار الشركة
                        </label>
                        {flight.airlineLogo && (
                          <div className="flex items-center gap-2">
                            <img src={flight.airlineLogo} alt="Logo" className="h-12 w-auto border border-gray-300 rounded bg-white p-1" />
                            <span className="text-xs text-gray-600">✓ تم رفع الشعار</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">مطار الإقلاع</label><input type="text" value={flight.departureAirport} onChange={(e) => updateReturnFlight(flight.id, 'departureAirport', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">وقت الإقلاع</label><input type="text" value={flight.departureTime} onChange={(e) => updateReturnFlight(flight.id, 'departureTime', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">مطار الوصول</label><input type="text" value={flight.arrivalAirport} onChange={(e) => updateReturnFlight(flight.id, 'arrivalAirport', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">وقت الوصول</label><input type="text" value={flight.arrivalTime} onChange={(e) => updateReturnFlight(flight.id, 'arrivalTime', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    </div>

                    <div className="mt-4"><label className="block text-sm font-semibold text-gray-700 mb-2">مدة التوقف</label><input type="text" value={flight.stopover} onChange={(e) => updateReturnFlight(flight.id, 'stopover', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Hotels */}
          {activeTab === 'hotels' && (
            <div className="space-y-6">
              {formData.hotels.map((hotel, index) => (
                <div key={hotel.id} className="bg-gray-50 p-6 rounded-lg relative">
                  <button onClick={() => removeHotel(hotel.id)} className="absolute top-4 left-4 text-red-600 hover:text-red-800">
                    <Trash2 size={20} />
                  </button>
                  <h3 className="text-lg font-bold text-gray-700 mb-4">فندق {index + 1}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">اسم الفندق</label><input type="text" value={hotel.name} onChange={(e) => updateHotel(hotel.id, 'name', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">رابط الفندق</label><input type="text" value={hotel.link} onChange={(e) => updateHotel(hotel.id, 'link', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ تسجيل الدخول</label><input type="text" value={hotel.checkIn} onChange={(e) => updateHotel(hotel.id, 'checkIn', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ تسجيل الخروج</label><input type="text" value={hotel.checkOut} onChange={(e) => updateHotel(hotel.id, 'checkOut', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">عدد الليالي</label><input type="text" value={hotel.nights} onChange={(e) => updateHotel(hotel.id, 'nights', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    <div><label className="block text-sm font-semibold text-gray-700 mb-2">نوع الغرفة</label><input type="text" value={hotel.roomType} onChange={(e) => updateHotel(hotel.id, 'roomType', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    <div className="col-span-2"><label className="block text-sm font-semibold text-gray-700 mb-2">الخدمات</label><input type="text" value={hotel.services} onChange={(e) => updateHotel(hotel.id, 'services', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">صورة الفندق</label>
                      <div className="flex gap-4 items-start">
                        <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer text-sm">
                          <input type="file" accept="image/*" onChange={(e) => handleHotelImageUpload(e, hotel.id)} className="hidden" />
                          <Download size={18} />
                          رفع صورة الفندق
                        </label>
                        {hotel.imageUrl && (
                          <div className="flex items-center gap-3">
                            <img src={hotel.imageUrl} alt={hotel.name} className="h-20 w-28 object-cover border border-gray-300 rounded" />
                            <span className="text-xs text-gray-600">✓ تم رفع الصورة</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={addHotel} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Plus size={20} />
                إضافة فندق جديد
              </button>
            </div>
          )}

          {/* Tab: Car Rental */}
          {activeTab === 'car' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border-4 border-green-300 shadow-lg">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-700 mb-3">🚗 استئجار سيارة خاصة</h3>
                    <p className="text-gray-700 text-base font-medium">فعّل هذا الخيار إذا كان العرض يتضمن استئجار سيارة خاصة</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={formData.carRental.enabled} onChange={toggleCarRental} className="sr-only peer" />
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
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-700 mb-4">📸 صورة السيارة</h3>
                    <div className="flex gap-6 items-start">
                      <div className="flex-1">
                        <label className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
                          <input type="file" accept="image/*" onChange={handleCarImageUpload} className="hidden" />
                          <Download size={20} />
                          رفع صورة السيارة
                        </label>
                      </div>
                      {formData.carRental.carImage && (
                        <div className="w-64">
                          <p className="text-sm font-semibold text-gray-700 mb-2">معاينة:</p>
                          <div className="border-4 border-blue-300 rounded-lg overflow-hidden shadow-lg">
                            <img src={formData.carRental.carImage} alt="Car" className="w-full h-40 object-cover" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-700 mb-4">تفاصيل الاستئجار</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ الاستلام</label><input type="text" value={formData.carRental.pickupDate} onChange={(e) => updateCarRental('pickupDate', e.target.value)} placeholder="مثال: 22-11-2025" className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ التسليم</label><input type="text" value={formData.carRental.returnDate} onChange={(e) => updateCarRental('returnDate', e.target.value)} placeholder="مثال: 28-11-2025" className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">مكان الاستلام</label><input type="text" value={formData.carRental.pickupLocation} onChange={(e) => updateCarRental('pickupLocation', e.target.value)} placeholder="مثال: مطار تيبليسي الدولي" className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                      <div><label className="block text-sm font-semibold text-gray-700 mb-2">مكان التسليم</label><input type="text" value={formData.carRental.returnLocation} onChange={(e) => updateCarRental('returnLocation', e.target.value)} placeholder="مثال: مطار تيبليسي الدولي" className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                      <div className="col-span-2"><label className="block text-sm font-semibold text-gray-700 mb-2">نوع السيارة</label><input type="text" value={formData.carRental.carType} onChange={(e) => updateCarRental('carType', e.target.value)} placeholder="مثال: تويوتا كامري 2024" className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-lg border-2 ${isCarRentalFilled() ? 'bg-green-50 border-green-300' : 'bg-yellow-50 border-yellow-300'}`}>
                    <div className="flex items-center gap-2">
                      {isCarRentalFilled() ? (
                        <><span className="text-green-600 text-xl">✓</span><span className="text-green-800 font-semibold">تم ملء جميع البيانات - سيظهر قسم استئجار السيارة في العرض النهائي</span></>
                      ) : (
                        <><span className="text-yellow-600 text-xl">⚠</span><span className="text-yellow-800 font-semibold">يرجى ملء جميع الحقول لإظهار قسم استئجار السيارة في العرض النهائي</span></>
                      )}
                    </div>
                  </div>
                </>
              )}

              {!formData.carRental.enabled && (
                <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
                  <Calendar size={80} className="mx-auto mb-6 text-gray-400" />
                  <p className="text-2xl font-bold text-gray-600 mb-3">قسم استئجار السيارة غير مفعّل</p>
                  <p className="text-lg text-gray-500 mb-6">قم بتفعيل الزر في الأعلى ☝️ لإضافة تفاصيل استئجار السيارة</p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-800 rounded-lg font-semibold">
                    <span className="text-2xl">⬆️</span>
                    <span>اضغط على الزر الأخضر في الأعلى للتفعيل</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab: Package */}
          {activeTab === 'package' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">التكلفة الإجمالية</label><input type="text" value={formData.totalCost} onChange={(e) => updateField('totalCost', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">الخصم</label><input type="text" value={formData.discount} onChange={(e) => updateField('discount', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">ملاحظة الخصم</label><input type="text" value={formData.discountNote} onChange={(e) => updateField('discountNote', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">منسق العرض</label><input type="text" value={formData.coordinator} onChange={(e) => updateField('coordinator', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>
              </div>

              <div><label className="block text-sm font-semibold text-gray-700 mb-2">المسمى الوظيفي للمنسق</label><input type="text" value={formData.coordinatorTitle} onChange={(e) => updateField('coordinatorTitle', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" /></div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-green-600">✅ الباقة تشمل</h3>
                  <button onClick={addInclude} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Plus size={18} />
                    إضافة
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.includes.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input type="text" value={item} onChange={(e) => updateInclude(index, e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg" />
                      <button onClick={() => removeInclude(index)} className="text-red-600 hover:text-red-800">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-red-600">❌ الباقة لا تشمل</h3>
                  <button onClick={addExclude} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    <Plus size={18} />
                    إضافة
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.excludes.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input type="text" value={item} onChange={(e) => updateExclude(index, e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg" />
                      <button onClick={() => removeExclude(index)} className="text-red-600 hover:text-red-800">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-800 mb-3">💡 كيفية استخدام البرنامج:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-900 mr-4">
            <li>املأ جميع البيانات في التبويبات الخمسة</li>
            <li>قم برفع الصور المطلوبة</li>
            <li>يمكنك إضافة رحلات طيران متعددة</li>
            <li>اضغط على زر "تحميل العرض"</li>
            <li>افتح الملف في أي متصفح</li>
            <li>للحفظ كـ PDF: اضغط Ctrl+P واختر "Save as PDF"</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
