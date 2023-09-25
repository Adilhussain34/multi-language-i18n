import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "../styles/Home.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';






export default function Home({ dir }) {
  const { locales } = useRouter();


  const intl = useIntl();


  
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });
  const textfieldtitle = intl.formatMessage({ id: "page.home.heading" });
  const buttonfields = intl.formatMessage({ id: "page.home.buttonfield" });
  const mapfield = intl.formatMessage({ id: "page.home.mapfield" });
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Add hreflang links */}

        <link rel="alternate" href="http://example.com" hrefLang="en" />

      </Head>

      <header>
        <div className={styles.languages}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              {locale}
            </Link>
          ))}
        </div>
      </header>


      <h1 style={{display:'flex', alignItem:'center', justifyContent:'center', color:'red'}}> This is a sample project of i18n {textfieldtitle}
      </h1>
      <label style={{fontSize:'40px'}} >{textfieldtitle}</label> <br /> <br />

         {/*------------ ALL    Textfiled  For Demo     ---------- */}
         

         

      <TextField id="outlined-basic" label={textfieldtitle} variant="outlined" />
      <Button  variant="contained " style={{backgroundColor:'red', margin:'10px', width:'15%'}}>{buttonfields}</Button>
      <TextField id="oNative select" label={textfieldtitle} variant="outlined" />


      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label={textfieldtitle} color="secondary" focused />
      <TextField label={textfieldtitle} variant="filled" color="success" focused />
      <TextField
        label={textfieldtitle}
        variant="standard"
        color="warning"
        focused
      />
    </Box>

      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={mapfield}
        inputProps={{ 'aria-label': 'search google maps' }}
      />

<TextField fullWidth label={textfieldtitle} id="fullWidth" />
<br /> <br />

<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label={textfieldtitle}
        value={TextField}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-uncontrolled"
        label={textfieldtitle}
        defaultValue="foo"
      />
    </Box>


    

      
     
      
      

      {/* <input type="text"  name="username"  /> */}
      {/* <button type="button">{textfieldtitle}</button> */}

      <main dir={dir} className={styles.main}>
        <h1 className={styles.title}>
          <FormattedMessage id="page.home.title" values={{ b: (chunks) => <b>{chunks}</b> }} />
        </h1>

        <p className={styles.description}>
          <FormattedMessage id="page.home.description" />
        </p>
      </main>
    </div>
   

  );
}
