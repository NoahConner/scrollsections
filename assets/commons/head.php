<head>
    <?php 
        $url = $_SERVER['REQUEST_URI'];
        $backLink;$dash ;
        if(strpos($url,"dashboard")){
            $backLink = '../';
            $dash = 'dashboard';
        }else{
            $backLink = null;
            $dash = null;
        }
    ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout with Sidebar</title>

    <!-- favicon -->
    <link rel="icon" href="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg">
    <!-- main css -->
    <link rel="stylesheet" href="<?php  echo $backLink; ?>assets/css/main.css">
    <!-- bootstrap 5 css -->
    <link rel="stylesheet" href="<?php  echo $backLink; ?>assets/css/bootstrap.min.css">
    <!-- jquery -->
    <script src="<?php  echo $backLink; ?>assets/js/jquery.min.js"></script>
    <!-- animate -->
    <link rel="stylesheet" href="<?php  echo $backLink; ?>assets/css/animate.min.css">
    <!-- owl -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- font-awsom -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
</head>