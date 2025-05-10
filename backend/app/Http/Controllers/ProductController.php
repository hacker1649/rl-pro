<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::where('status', 1)->get();

        // Return the view with products and filter data
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'desc' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $product = Product::create([
            'name' => $validated['name'],
            'desc' => $validated['desc'],
            'price' => $validated['price'],
            'status' => 1,
        ]);

        return response()->json(['message' => 'Product created successfully', 'product' => $product]);
    }

    /**
     * Fetches the specified resource in storage.
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'desc' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $product = Product::findOrFail($id);
        $product->update($validated);

        return response()->json(['message' => 'Product updated successfully', 'product' => $product]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->update(['status' => 0]);

        return response()->json(['message' => 'Product deactivated successfully']);
    }
}