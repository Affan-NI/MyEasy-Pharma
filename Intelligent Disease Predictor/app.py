import pickle
import streamlit as st
from streamlit_option_menu import option_menu
import requests
from streamlit_lottie import st_lottie

# --- PAGE CONFIGURATION ---
st.set_page_config(
    page_title="HealthPredict Pro",
    page_icon="⚕️",
    layout="wide",
    initial_sidebar_state="expanded",
)

# --- CACHING ANIMATIONS ---
@st.cache_data
def load_lottieurl(url: str):
    try:
        r = requests.get(url, timeout=10)
        if r.status_code != 200:
            return None
        return r.json()
    except Exception:
        return None

# Animations loading
lottie_health = load_lottieurl("https://assets5.lottiefiles.com/packages/lf20_5njp3vgg.json")
lottie_diabetes = load_lottieurl("https://assets1.lottiefiles.com/private_files/lf30_81v6m0dz.json")
lottie_heart = load_lottieurl("https://assets2.lottiefiles.com/packages/lf20_v7vwa63m.json")
lottie_parkinson = load_lottieurl("https://assets10.lottiefiles.com/packages/lf20_6p8yqz5v.json")

# --- PROFESSIONAL CUSTOM CSS ---
st.markdown("""
    <style>
    /* Import Google Font */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Inter', sans-serif;
    }

    .main {
        background-color: #f4f7f9;
    }
    
    /* Animation for components */
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Professional Card Style */
    .prediction-card {
        padding: 30px;
        border-radius: 20px;
        background-color: #ffffff;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        border: 1px solid #eef2f6;
        animation: fadeInUp 0.7s ease-out;
        margin-bottom: 25px;
    }

    /* Button Styling */
    .stButton>button {
        width: 100%;
        background: linear-gradient(135deg, #1e3d59 0%, #17324d 100%);
        color: #ffffff !important;
        font-weight: 600;
        letter-spacing: 0.5px;
        border: none;
        height: 3.5rem;
        border-radius: 12px;
        transition: all 0.3s ease;
        margin-top: 20px;
    }
    
    .stButton>button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(30, 61, 89, 0.3);
        background: linear-gradient(135deg, #2b5072 0%, #1e3d59 100%);
    }

    /* Header Styling */
    h1 {
        color: #1e3d59;
        font-weight: 800;
        text-align: center;
        margin-bottom: 35px;
        letter-spacing: -1px;
    }

    /* Input labels */
    label {
        color: #4a5568 !important;
        font-weight: 500 !important;
    }
    </style>
    """, unsafe_allow_html=True)

# --- MODEL LOADING ---
@st.cache_resource
def load_models():
    try:
        diabetes = pickle.load(open("diabetes_model.sav", 'rb'))
        heart = pickle.load(open("heart_disease_model.sav", 'rb'))
        parkinsons = pickle.load(open("parkinsons_model.sav", 'rb'))
        return diabetes, heart, parkinsons
    except FileNotFoundError:
        return None, None, None

diabetes_model, heart_disease_model, parkinsons_model = load_models()

# --- SIDEBAR NAVIGATION ---
with st.sidebar:
    if lottie_health:
        st_lottie(lottie_health, height=130, key="nav_anim")
    
    st.markdown("<h2 style='text-align: center; color: #1e3d59;'>Pro Diagnostic</h2>", unsafe_allow_html=True)
    
    selected = option_menu(
        menu_title=None,
        options=['Diabetes Prediction', 'Heart Disease Prediction', 'Parkinson\'s Prediction'],
        icons=['droplet-fill', 'heart-pulse-fill', 'person-arms-up'],
        default_index=0,
        styles={
            "container": {"padding": "5!important", "background-color": "transparent"},
            "icon": {"color": "#1e3d59", "font-size": "20px"}, 
            "nav-link": {"font-size": "15px", "text-align": "left", "margin":"5px", "border-radius": "10px"},
            "nav-link-selected": {"background-color": "#1e3d59", "font-weight": "600"},
        }
    )
    
    st.divider()
    if diabetes_model and heart_disease_model and parkinsons_model:
        st.success("System Status: Active")

# --- RESULT HELPER ---
def display_prediction(result, name):
    if result == 1:
        st.markdown(f"""
            <div style="background-color: #fff5f5; border-left: 6px solid #e53e3e; padding: 25px; border-radius: 12px; margin-top: 25px; animation: fadeInUp 0.5s;">
                <h3 style="color: #c53030; margin: 0;">⚠️ Potential Risk Detected</h3>
                <p style="color: #742a2a; font-size: 1.1rem; margin-top: 8px;">
                    Our analysis indicates a high probability of <b>{name}</b>. 
                    Please consult a healthcare professional for a detailed clinical examination.
                </p>
            </div>
        """, unsafe_allow_html=True)
    else:
        st.markdown(f"""
            <div style="background-color: #f0fff4; border-left: 6px solid #38a169; padding: 25px; border-radius: 12px; margin-top: 25px; animation: fadeInUp 0.5s;">
                <h3 style="color: #2f855a; margin: 0;">✅ Results are Normal</h3>
                <p style="color: #22543d; font-size: 1.1rem; margin-top: 8px;">
                    The system suggests that the person is likely <b>Negative for {name}</b>.
                </p>
            </div>
        """, unsafe_allow_html=True)

# --- DIABETES PAGE ---
if selected == 'Diabetes Prediction':
    st.markdown("<h1>Diabetes Diagnostic Analysis</h1>", unsafe_allow_html=True)
    
    col_l, col_r = st.columns([2, 1])
    with col_r:
        if lottie_diabetes: st_lottie(lottie_diabetes, height=220, key="diab")
    with col_l:
        st.info("Fill in the patient's biometric data to predict diabetes risk.")

    with st.container():
        st.markdown('<div class="prediction-card">', unsafe_allow_html=True)
        c1, c2, c3 = st.columns(3)
        with c1:
            preg = st.number_input('Number of Pregnancies', min_value=0, help="Total pregnancies")
            skin = st.number_input('Skin Thickness (mm)', min_value=0.0)
        with c2:
            gluc = st.number_input('Glucose Level (mg/dL)', min_value=0.0)
            ins = st.number_input('Insulin Level (mu U/ml)', min_value=0.0)
        with c3:
            bp = st.number_input('Blood Pressure (mmHg)', min_value=0.0)
            bmi = st.number_input('BMI Value', min_value=0.0)
        
        ca, cb = st.columns(2)
        with ca: dpf = st.number_input('Pedigree Function', format="%.3f")
        with cb: age = st.number_input('Age', min_value=0, step=1)

        if st.button("Calculate Diabetes Risk"):
            if diabetes_model:
                res = diabetes_model.predict([[preg, gluc, bp, skin, ins, bmi, dpf, age]])
                display_prediction(res[0], "Diabetes")
            else: st.error("Model file not found.")
        st.markdown('</div>', unsafe_allow_html=True)

# --- HEART DISEASE PAGE ---
elif selected == 'Heart Disease Prediction':
    st.markdown("<h1>Cardiac Risk Assessment</h1>", unsafe_allow_html=True)
    
    col_l, col_r = st.columns([2, 1])
    with col_r:
        if lottie_heart: st_lottie(lottie_heart, height=220, key="heart")
    with col_l:
        st.info("Input clinical heart measurements to evaluate potential cardiac issues.")

    with st.container():
        st.markdown('<div class="prediction-card">', unsafe_allow_html=True)
        c1, c2, c3 = st.columns(3)
        with c1:
            age_h = st.number_input('Age', min_value=1)
            trestbps = st.number_input('Resting BP (mmHg)')
            restecg = st.selectbox('Resting ECG Results', [0, 1, 2])
            ca = st.selectbox('Major Vessels (0-3)', [0, 1, 2, 3])
        with c2:
            sex = st.selectbox('Sex (1=Male, 0=Female)', [1, 0])
            chol = st.number_input('Serum Cholesterol (mg/dl)')
            thalach = st.number_input('Max Heart Rate Achieved')
            thal = st.selectbox('Thalassemia (1=Normal, 2=Fixed, 3=Reversible)', [1, 2, 3])
        with c3:
            cp = st.selectbox('Chest Pain Type (0-3)', [0, 1, 2, 3])
            fbs = st.selectbox('Fasting Sugar > 120 (1=True, 0=False)', [1, 0])
            exang = st.selectbox('Exercise Induced Angina', [1, 0])
            oldpeak = st.number_input('ST Depression (Oldpeak)', format="%.1f")
        
        slope = st.selectbox('Slope of peak exercise ST segment', [0, 1, 2])

        if st.button("Evaluate Heart Health"):
            if heart_disease_model:
                # Features in correct order for model
                res = heart_disease_model.predict([[age_h, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])
                display_prediction(res[0], "Heart Disease")
            else: st.error("Model file not found.")
        st.markdown('</div>', unsafe_allow_html=True)

# --- PARKINSON'S PAGE ---
elif selected == "Parkinson's Prediction":
    st.markdown("<h1>Neurological Assessment</h1>", unsafe_allow_html=True)
    
    col_l, col_r = st.columns([3, 1])
    with col_r:
        if lottie_parkinson: st_lottie(lottie_parkinson, height=180, key="park")
    with col_l:
        st.info("Enter voice acoustic features to detect Parkinson's Disease probability.")

    with st.container():
        st.markdown('<div class="prediction-card">', unsafe_allow_html=True)
        cols = st.columns(4)
        labels = [
            'MDVP:Fo(Hz)', 'MDVP:Fhi(Hz)', 'MDVP:Flo(Hz)', 'MDVP:Jitter(%)',
            'MDVP:Jitter(Abs)', 'MDVP:RAP', 'MDVP:PPQ', 'Jitter:DDP',
            'MDVP:Shimmer', 'MDVP:Shimmer(dB)', 'Shimmer:APQ3', 'Shimmer:APQ5',
            'MDVP:APQ', 'Shimmer:DDA', 'NHR', 'HNR', 'RPDE', 'DFA',
            'spread1', 'spread2', 'D2', 'PPE'
        ]
        inputs = []
        for i, label in enumerate(labels):
            with cols[i % 4]:
                val = st.number_input(label, format="%.5f", key=f"p_{i}")
                inputs.append(val)

        if st.button("Run Parkinson's Analysis"):
            if parkinsons_model:
                res = parkinsons_model.predict([inputs])
                display_prediction(res[0], "Parkinson's Disease")
            else: st.error("Model file not found.")
        st.markdown('</div>', unsafe_allow_html=True)

# --- FOOTER ---
st.markdown("<br><p style='text-align: center; color: #a0aec0; font-size: 0.8rem;'>HealthPredict Pro | Clinical Diagnostic Support Tool</p>", unsafe_allow_html=True)













# my main  
# # -*- coding: utf-8 -*-
# """
# Created on Fri Feb  7 10:59:11 2025

# @author: affan
# """

# import pickle
# import streamlit as st
# from streamlit_option_menu import option_menu

# #loading the saved model
# diabetes_model=pickle.load(open("diabetes_model.sav",'rb'))
# heart_disease_model=pickle.load(open("heart_disease_model.sav",'rb'))
# parkinsons_model=pickle.load(open("parkinsons_model.sav",'rb'))




# #side bar for navigation
# with st.sidebar:
#     selected=option_menu('Multiple disease prediction system ',
                         
#                          ['Dibetes Prediction','Heart disease Prediction','Parkinson prediction'],
                         
#                          icons=['activity','heart','person'],
                         
#                          default_index=0)  # index 0 means  menu me selected index 0th wala hi dikhe ga means Dibetes Prediction khulega
#                                             #if index 1 then selscted index 1st wala dekhega meansa heart disease predicrion khulega
    
    
# #diabetes prediction
# if(selected=='Dibetes Prediction'):
#     #page title
#     st.title('Diabetes prediction')
    
    
#     # getting the input data from user 
#     #column for input feild 
#     col1,col2,col3=st.columns(3)
    
#     with col1:
#         Pregnancies=st.text_input('Number of Pregnancies')
#     with col2:
#         Glucose=st.text_input('Glucose level')
#     with col3:
#         BloodPressure=st.text_input('BloodPressure value')
#     with col1:
#         SkinThickness=st.text_input('SkinThickness value')
#     with col2:
#         Insulin=st.text_input('Insulin level')
#     with col3:
#         BMI=st.text_input('BMI value')
#     with col1:
#         DiabetesPedigreeFunction=st.text_input('DiabetesPedigreeFunction value')
#     with col2:
#         Age=st.text_input('Age of the person')
    
    
#     #code for prediction
#     diab_dignosis=''
#     #creating  a butten
#     if st.button("Diabetes test result"):
#         diab_predction=diabetes_model.predict([[Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age]])
        
#         if(diab_predction[0]==1):
#             diab_dignosis='The person is Diabetic'
#         else:
#             diab_dignosis='The person is not Diabetic'
            
#     st.success(diab_dignosis)
    
    
    
    
# if(selected=='Heart disease Prediction'):
#     #page title
#     st.title('Heart disease Prediction')
    
    
#     # getting the input data from user 
#     #column for input feild 
#     col1,col2,col3=st.columns(3)
    
#     with col1:
#         age=st.text_input('Age of the person')
#     with col2:
#         sex=st.text_input('sex')
#     with col3:
#         cp=st.text_input('chest pain type')
#     with col1:
#         trestbps=st.text_input('resting blood presure')
#     with col2:
#         chol=st.text_input('serum cholestrole in mg/dl')
#     with col3:
#         fbs=st.text_input('fasting blood sugar > 120mg/dl')
#     with col1:
#         restecg=st.text_input('resting electrocardiographic results')
#     with col2:
#         thalach=st.text_input('maximum heart rate achieved')
#     with col3:
#          exang=st.text_input('exercise induced angina')
#     with col1:
#         oldpeak=st.text_input('oldpeak = ST depression induced by exercise relative to rest')
#     with col2:
#         slope=st.text_input('the slope of the peak exercise ST segment')
#     with col3:
#         ca=st.text_input('number of major vessels (0-3) colored by flourosopy')
#     with col1:
#         thal=st.text_input('thal: 0 = normal; 1 = fixed defect; 2 = reversable defect')
    
    
#     #code for prediction
#     heart_dignosis=''
#     #creating  a butten
#     if st.button("Heart Disease test result"):
#         #heart_predction=heart_disease_model.predict([[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]])
#         heart_predction = heart_disease_model.predict([[int(age), int(sex), int(cp), int(trestbps),
#                                                          int(chol), int(fbs), int(restecg), int(thalach),
#                                                          int(exang), float(oldpeak), int(slope), int(ca), int(thal)]])
        
#         if(heart_predction[0]==1):
#             heart_dignosis='The person have heart disease'
#         else:
#             heart_dignosis='The person heart is healthy'
            
#     st.success(heart_dignosis)
    

# if(selected=='Parkinson prediction'):
#     #page title
#     st.title('Parkinson prediction')
    
    
#     # getting the input data from user 
#     #column for input feild 
#     col1,col2,col3,col4,col5=st.columns(5)
    
#     with col1:
#         MDVP_Fo_Hz=st.text_input(' Average vocal fundamental frequency')
#     with col2:
#         MDVP_Fhi_Hz=st.text_input('Maximum vocal fundamental frequency')
#     with col3:
#         MDVP_Flo_Hz=st.text_input(' Minimum vocal fundamental frequency')
#     with col4:
#         MDVP_Jitter=st.text_input('MDVP:Jitter(%)')
#     with col5:
#         MDVP_Jitter_Abs=st.text_input('MDVP:Jitter(Abs)')
#     with col1:
#         MDVP_RAP=st.text_input('MDVP:RAP')
#     with col2:
#         MDVP_PPQ=st.text_input('MDVP:PPQ')
#     with col3:
#         Jitter_DDP=st.text_input('Jitter:DDP')
#     with col4:
#         MDVP_Shimmer=st.text_input('MDVP:Shimmer')
#     with col5:
#         MDVP_Shimmer_dB=st.text_input('MDVP:Shimmer(dB)')
#     with col1:
#         Shimmer_APQ3=st.text_input('Shimmer:APQ3')
#     with col2:
#         Shimmer_APQ5=st.text_input('Shimmer:APQ5')
#     with col3:
#         MDVP_APQ=st.text_input('MDVP:APQ')
#     with col4:
#         Shimmer_DDA=st.text_input('Shimmer:DDA')
#     with col5:
#         NHR=st.text_input('NHR')
#     with col1:
#         HNR=st.text_input('HNR')
#     with col2:
#         RPDE=st.text_input('RPDE')
#     with col3:
#         DFA=st.text_input('DFA')
#     with col4:
#         spread1=st.text_input('spread1')
#     with col5:
#         spread2=st.text_input('spread2')
#     with col1:
#         D2=st.text_input('D2')
#     with col2:
#         PPE=st.text_input('PPE')

                
    
#     #code for prediction
#     Parkinson_dignosis=''
#     #creating  a butten
#     if st.button("parkinson test result"):
#         #Parkinson_predction=parkinsons_model.predict([[MDVP_Fo_Hz,MDVP_Fhi_Hz, MDVP_Flo_Hz,MDVP_Jitter,MDVP_Jitter_Abs,MDVP_RAP,MDVP_PPQ,Jitter_DDP,MDVP_Shimmer_dB,Shimmer_APQ3,MDVP_Shimmer,Shimmer_APQ5,MDVP_APQ,Shimmer_DDA,NHR,HNR,RPDE,DFA,spread1,spread2,D2,PPE]])
#         Parkinson_predction = parkinsons_model.predict([[float(MDVP_Fo_Hz), float(MDVP_Fhi_Hz), float(MDVP_Flo_Hz),
#                                                   float(MDVP_Jitter), float(MDVP_Jitter_Abs), float(MDVP_RAP),
#                                                   float(MDVP_PPQ), float(Jitter_DDP), float(MDVP_Shimmer),
#                                                   float(MDVP_Shimmer_dB), float(Shimmer_APQ3), float(Shimmer_APQ5),
#                                                   float(MDVP_APQ), float(Shimmer_DDA), float(NHR), float(HNR),
#                                                   float(RPDE), float(DFA), float(spread1), float(spread2),
#                                                   float(D2), float(PPE)]])

        
#         if( Parkinson_predction[0]==1):
#             Parkinson_dignosis='The person have Parkinson disease'
#         else:
#             Parkinson_dignosis='The person have not Parkinson disease'
            
#     st.success(Parkinson_dignosis)
    



















# import pickle
# import streamlit as st
# from streamlit_option_menu import option_menu

# # --- PAGE CONFIGURATION ---
# st.set_page_config(
#     page_title="HealthPredict Pro",
#     page_icon="⚕️",
#     layout="wide",
#     initial_sidebar_state="expanded",
# )

# # --- CUSTOM STYLING ---
# st.markdown("""
#     <style>
#     .main {
#         background-color: #f8f9fa;
#     }
#     .stButton>button {
#         width: 100%;
#         border-radius: 5px;
#         height: 3em;
#         background-color: #007bff;
#         color: white;
#         font-weight: bold;
#         border: none;
#     }
#     .stButton>button:hover {
#         background-color: #0056b3;
#         border: none;
#     }
#     .prediction-card {
#         padding: 20px;
#         border-radius: 10px;
#         background-color: white;
#         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
#         margin-bottom: 20px;
#     }
#     h1 {
#         color: #1e3d59;
#         text-align: center;
#     }
#     </style>
#     """, unsafe_allow_html=True)

# # --- MODEL LOADING ---
# @st.cache_resource
# def load_models():
#     try:
#         diabetes = pickle.load(open("diabetes_model.sav", 'rb'))
#         heart = pickle.load(open("heart_disease_model.sav", 'rb'))
#         parkinsons = pickle.load(open("parkinsons_model.sav", 'rb'))
#         return diabetes, heart, parkinsons
#     except FileNotFoundError:
#         st.error("Model files (.sav) not found. Please ensure they are in the correct directory.")
#         return None, None, None

# diabetes_model, heart_disease_model, parkinsons_model = load_models()

# # --- SIDEBAR NAVIGATION ---
# with st.sidebar:
#     st.image("https://cdn-icons-png.flaticon.com/512/2864/2864230.png", width=100)
#     st.title("HealthPredict Pro")
    
#     selected = option_menu(
#         menu_title='Diagnostics Menu',
#         options=['Diabetes Prediction', 'Heart Disease Prediction', 'Parkinson\'s Prediction'],
#         icons=['activity', 'heart-pulse', 'person-walking'],
#         menu_icon='hospital',
#         default_index=0,
#         styles={
#             "container": {"padding": "5!important", "background-color": "#fafafa"},
#             "icon": {"color": "#007bff", "font-size": "20px"}, 
#             "nav-link": {"font-size": "16px", "text-align": "left", "margin":"0px", "--hover-color": "#eee"},
#             "nav-link-selected": {"background-color": "#007bff"},
#         }
#     )
    
#     st.info("This system uses Machine Learning models to predict the likelihood of diseases based on clinical data.")

# # --- HELPERS ---
# def prediction_display(result, disease_name):
#     if result == 1:
#         st.error(f"⚠️ **Result:** The system indicates a high probability of **{disease_name}**.")
#     else:
#         st.success(f"✅ **Result:** The system indicates that the person is likely **Negative for {disease_name}**.")

# # --- DIABETES SECTION ---
# if selected == 'Diabetes Prediction':
#     st.markdown("<h1>Diabetes Prediction System</h1>", unsafe_allow_html=True)
    
#     with st.container():
#         st.markdown('<div class="prediction-card">', unsafe_allow_html=True)
#         col1, col2, col3 = st.columns(3)
        
#         with col1:
#             Pregnancies = st.number_input('Number of Pregnancies', min_value=0, step=1)
#             SkinThickness = st.number_input('Skin Thickness (mm)', min_value=0.0)
#         with col2:
#             Glucose = st.number_input('Glucose Level (mg/dL)', min_value=0.0)
#             Insulin = st.number_input('Insulin Level (mu U/ml)', min_value=0.0)
#         with col3:
#             BloodPressure = st.number_input('Blood Pressure (mm Hg)', min_value=0.0)
#             BMI = st.number_input('BMI Value', min_value=0.0)
            
#         col_a, col_b = st.columns(2)
#         with col_a:
#             DiabetesPedigreeFunction = st.number_input('Diabetes Pedigree Function', format="%.3f")
#         with col_b:
#             Age = st.number_input('Age of the Person', min_value=0, step=1)
            
#         if st.button("Run Diabetes Diagnostic"):
#             if diabetes_model:
#                 features = [Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age]
#                 prediction = diabetes_model.predict([features])
#                 prediction_display(prediction[0], "Diabetes")
#         st.markdown('</div>', unsafe_allow_html=True)

# # --- HEART DISEASE SECTION ---
# elif selected == 'Heart Disease Prediction':
#     st.markdown("<h1>Heart Disease Prediction System</h1>", unsafe_allow_html=True)
    
#     with st.container():
#         st.markdown('<div class="prediction-card">', unsafe_allow_html=True)
#         col1, col2, col3 = st.columns(3)
        
#         with col1:
#             age = st.number_input('Age', min_value=1, step=1)
#             trestbps = st.number_input('Resting Blood Pressure', min_value=0)
#             restecg = st.selectbox('Resting ECG Results', [0, 1, 2])
#             ca = st.selectbox('Major Vessels (0-3)', [0, 1, 2, 3])
#         with col2:
#             sex = st.selectbox('Sex (1=M, 0=F)', [1, 0])
#             chol = st.number_input('Serum Cholestrole (mg/dl)', min_value=0)
#             thalach = st.number_input('Max Heart Rate Achieved', min_value=0)
#             thal = st.selectbox('Thal (0, 1, 2)', [0, 1, 2])
#         with col3:
#             cp = st.selectbox('Chest Pain Type (0-3)', [0, 1, 2, 3])
#             fbs = st.selectbox('Fasting Blood Sugar > 120 (1=True, 0=False)', [1, 0])
#             exang = st.selectbox('Exercise Induced Angina (1=Yes, 0=No)', [1, 0])
#             oldpeak = st.number_input('ST Depression (oldpeak)', format="%.1f")
            
#         slope = st.selectbox('Slope of Peak Exercise ST', [0, 1, 2])

#         if st.button("Run Heart Diagnostic"):
#             if heart_disease_model:
#                 features = [age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]
#                 prediction = heart_disease_model.predict([features])
#                 prediction_display(prediction[0], "Heart Disease")
#         st.markdown('</div>', unsafe_allow_html=True)

# # --- PARKINSON'S SECTION ---
# elif selected == "Parkinson's Prediction":
#     st.markdown("<h1>Parkinson's Disease Prediction</h1>", unsafe_allow_html=True)
    
#     with st.container():
#         st.markdown('<div class="prediction-card">', unsafe_allow_html=True)
#         st.write("Please provide the vocal fundamental frequency measurements:")
        
#         cols = st.columns(4)
#         inputs = []
#         labels = [
#             'MDVP:Fo(Hz)', 'MDVP:Fhi(Hz)', 'MDVP:Flo(Hz)', 'MDVP:Jitter(%)',
#             'MDVP:Jitter(Abs)', 'MDVP:RAP', 'MDVP:PPQ', 'Jitter:DDP',
#             'MDVP:Shimmer', 'MDVP:Shimmer(dB)', 'Shimmer:APQ3', 'Shimmer:APQ5',
#             'MDVP:APQ', 'Shimmer:DDA', 'NHR', 'HNR', 'RPDE', 'DFA',
#             'spread1', 'spread2', 'D2', 'PPE'
#         ]
        
#         for i, label in enumerate(labels):
#             with cols[i % 4]:
#                 val = st.number_input(label, format="%.5f")
#                 inputs.append(val)

#         if st.button("Run Parkinson's Diagnostic"):
#             if parkinsons_model:
#                 prediction = parkinsons_model.predict([inputs])
#                 prediction_display(prediction[0], "Parkinson's Disease")
#         st.markdown('</div>', unsafe_allow_html=True)

# # --- FOOTER ---
# st.markdown("---")
# st.caption("Developed by Affan | Medical Diagnostic System v2.0")




















