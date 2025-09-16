using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add SpaYarp service
builder.Services.AddSpaYarp();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactAppPolicy", policy =>
    {
        policy.WithOrigins($"http://localhost:{builder.Configuration["ReactPort"] ?? "3000"}")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("ReactAppPolicy");

app.UseAuthorization();

app.MapControllers();

// SpaYarp configuration
if (app.Environment.IsDevelopment())
{
    app.UseSpaYarp();
}
else
{
    app.MapFallbackToFile("index.html");
}

app.Run();
