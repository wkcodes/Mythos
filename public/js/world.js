<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>World</title>
  <link href="https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/flatly/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css" media="screen" title="no title">
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>

<body>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="form-group">
          <select class="custom-select" id="category">
            <option selected value="">All Categories</option>
            <option value="Personal">Personal</option>
            <option value="Product Review">Product Review</option>
            <option value="Political">Political</option>
          </select>
        </div>
      </div>
      <div class="col-md-2">
        <a class="btn btn-light" href="/profile">New Post</a>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 blog-container">
      </div>
    </div>

    <!-- This is one option for the layout of all myths being displayed -->

    <!-- the following line will be hardcoded in your html file. Everything afterwards will be dynamically created in your world.js file. -->
    <div class="row" id="allMyths">
    
      <!-- create variables for each of the following tags and then append each child into their parent -->
      <div class="col-md-6 offset-md-3">
        <div class="myMyths">
    
          <div class='card text-center' style='width: 100%;'>
            <div class="card-header">
              <!-- in your  js code for world you would create a variable of the character name and then reference that variable followed by the text "Myth:"-->
              Gongor's Myth:
            </div>
            <div class="card-body">
              <h5 class="card-title">Myth Title</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam obcaecati,
                reprehenderit provident ad quas officia similique enim assumenda hic dicta iusto. Temporibus optio commodi
                earum tempore laboriosam cumque veritatis!</p>
            </div>
    
          </div>
    
        </div>
      </div>
    
    </div>
  </div>

</body>

</html>