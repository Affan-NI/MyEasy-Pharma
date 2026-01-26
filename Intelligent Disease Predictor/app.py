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